<?php $title = "Login" ?>
<?php include "../components/nav.php" ?>
<h1>Admin</h1>
<div class="jumbotron jumbotron-custom"> <!--text-center-->
  <h2>Log in to your account</h2>
  <div class="form-horizontal form-group form-group-lg row">

    <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-5 col-md-offset-2">
      <label for="email">Email address</label>
      <input type="email" name="email" id="email" class="form-control" placeholder="Please type email address">
      <div id="email-help"></div>
      <br>
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Please type your desired password">
      <small id="passwordHelpBlock" class="form-text text-muted">
          Your password must be 5-20 characters long
      </small>
      <div id="password-help"></div>
      <br>
      <button onclick="login()" value="submit" id="submit" class="btn btn-primary btn-lg btn-block">Log In</button>
      <div id="submit-help"></div>
      Don't have an account? <a href="/admin/signup.php">sign up</a>
    </div>

  </div>
</div>
<?php include "../components/footer.html" ?>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/sha512.js"></script>
<script type="text/javascript" src="admin.js"></script>
