<?php include "verifyLogin.php" ?>

<!--Based on bootstrap templates-->
<!DOCTYPE html>
<html>
  <?php include "head.php" ?>
  <body>
    <?php if (!isset($_SERVER['HTACCESS'])): ?>
      <div class="alert alert-danger">
        htaccess not enabled on apache server! Some features may not behave as expected.
      </div>
    <?php endif; ?>
    <div class="wrapper">
      <nav class="navbar navbar-custom">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar">
              <span class="sr-only">Toggle Navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/hackathon/">Home</a>
          </div>

          <div class="collapse navbar-collapse" id="main-navbar">
            <ul class="nav navbar-nav">
              <li><a href="/hackathon/blog">Blog</a></li>
              <?php if ($logged_in) {echo "<li><a href='/hackathon/blog/new.php'>New Post</a></li>";}?>
              <li><a href="/hackathon/about.php">About</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <?php if ($logged_in) {
                    echo $username;
                  } else {
                    echo "Admin";
                  }?>
                <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <?php if ($logged_in) {
                    echo "<li><a href='?logout', onclick='logout()'>Logout</a></li>";
                  } else {
                    echo "<li><a href='/hackathon/admin/login.php'>Login</a></li>";
                    echo "<li><a href='/hackathon/admin/signup.php'>Signup</a></li>";
                  }?>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="body-div container">
