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
		<h1>Sign Up</h1>
		<div id="login-box">
            
            <input type="text" name="name" id="name" class="form-control text-input" placeholder="Name" autofocus="autofocus"/>
            <div id="name-help"></div>
			<input type="email" name="email" id="email" class="form-control text-input" placeholder="Email">
            <div id="email-help"></div>
			<input type="password" class="form-control text-input" id="password" placeholder="Password">
            <div id="password-help"></div>
            <input type="password" class="form-control text-input" id="confirm-password" placeholder="Confirm Password">
            <div id="password-match-help"></div>
			<button onclick="signup()" value="submit" id="submit" class="button orange">Sign Up</button>
            <div id="submit-help"></div>
			<span id="note">Already have an account?</span>
			<a href="/hackathon/admin/login.php" class="button orange">Log in</a>
			</div>
	</div>
	</body>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/sha512.js"></script>
    <script type="text/javascript" src="admin.js"></script>
</html>
