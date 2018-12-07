<!DOCTYPE html>
<html>
	<head>
		<link href="/hackathon/css/style.css" text="text/css" rel="stylesheet">
	</head>
	<body>
	<nav>
		<span>ScienceFox</span>
		<span>Home</span>
		<span>Lessons</span>
	</nav>
	<div id="hero">
		<h1>We make engaging classroom experiences</h1>
		<div id="login-box">
			<input type="email" name="email" id="email" class="form-control text-input" placeholder="Email">
            <div id="email-help"></div>
			<input type="password" class="form-control text-input" id="password" placeholder="Password">
            <div id="password-help"></div>
			<button onclick="login()" value="submit" id="submit" class="button orange">Log In</button>
            <div id="submit-help"></div>
            <span id="note">Don't have an account?</span>
			<a href="signup.php" class="button orange">Sign Up</a>
			</div>
	</div>
	</body>
    
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/sha512.js"></script>
    <script type="text/javascript" src="app.js"></script>
    <script type="text/javascript" src="admin/admin.js"></script>
</html>
