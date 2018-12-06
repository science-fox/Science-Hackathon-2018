<?php

  $valid = false;
  #for signing up a new user
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['type'])) {
      if ($_POST['type'] === 'signup' && isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password'])) {
        $valid = true;
        $db = mysqli_connect("sql12.freemysqlhosting.net:3306", "sql12268809",	"jftvPpaqd1", "sql12268809");
        if (!$db){
          echo -1;
        } else {
          $name = mysqli_escape_string($db, $_POST['name']);
          $email = mysqli_escape_string($db, $_POST['email']);
          #$password = mysqli_escape_string($db, password_hash($_POST['password'], PASSWORD_ARGON2I)); NOTE: This required additional server setup.
          $password = mysqli_escape_string($db, hash("md5", $_POST['password'])); //NOTE: Not actually all that secure. See above.
          $cookieExpire = time()+86400;
          $cookieValue = hash("md5", $email.$cookieExpire);
          $success = $db->query("INSERT INTO Student VALUES ('$email', '$name', '$password', '$cookieValue', $cookieExpire)");
          if ($success) {
            setcookie("localhostUser", $cookieValue, $cookieExpire, "/");
          }
          mysqli_close($db);
          echo $success;
        }
      }

      #for logging in a user
      else if ($_POST['type'] == 'login' && isset($_POST['email']) && isset($_POST['password'])) {
        $valid = true;
        $db = mysqli_connect("sql12.freemysqlhosting.net:3306", "sql12268809",	"jftvPpaqd1", "sql12268809");
        if (!$db){
          echo -1;
        } else {
          $email = mysqli_escape_string($db, $_POST['email']);
          #$password = mysqli_escape_string($db, password_hash($_POST['password'], PASSWORD_ARGON2I)); NOTE: This required additional server setup.
          $password = mysqli_escape_string($db, hash("md5", $_POST['password'])); //NOTE: Not actually all that secure. See above.
          $numMatching = $db->query("SELECT email FROM Student WHERE email = '$email' AND password = '$password'")->num_rows;#check credentials
          if ($numMatching === 1) {
            #calculate cookie token and expiry
            $cookieExpire = time()+86400; #24hrs validity
            $cookieValue = hash("md5", $email.$cookieExpire);
            #slap cookie on client and add to db
            $success = $db->query("UPDATE Student SET cookie = '$cookieValue', cookie_expire = '$cookieExpire' WHERE email = '$email'");
            if ($success) {
              setcookie("localhostUser", $cookieValue, $cookieExpire, "/");
            }
            echo $success;
          } else {
            echo "invalid credentials";
          }
          mysqli_close($db);
        }
      }
    }
  }

  #for verifying if an existing user with that email address exists
  else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['email'])) {
      $valid = true;
      $db = mysqli_connect("sql12.freemysqlhosting.net:3306", "sql12268809",	"jftvPpaqd1", "sql12268809");
      if (!$db){
        echo -1;
      } else {
        $email = mysqli_escape_string($db, $_GET['email']);
        $response = $db->query("SELECT email FROM Student WHERE email = '$email'");
        mysqli_close($db);
        echo $response->num_rows;
      }
    }
  }

  if (!$valid){
    http_response_code(403); //not valid so wasn't sent by a valid client
    include('../components/403.php');
    die();
  }
?>
