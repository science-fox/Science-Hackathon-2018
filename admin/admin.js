/* -------------- MAIN LOGIN AND SIGNUP FUNCTIONS -------------- */

async function signup() {
  //form validation
  let name = validateName();
  let email = validateEmail();
  let emailIsUnique = await checkUniqueEmail(email);
  let password = validatePassword();

  //attempt signup request to server
  if (name && email && emailIsUnique && password){
    var alertText = document.createTextNode("Attemping to signup...");
    makeAlert("alert-warning", alertText, "submit-help");

    password = CryptoJS.SHA512(password);//to avoid sending the actual password over the network
    let result = await signupPost(email, name, password);
    //remove temporary alert here
    if (result === "-1"){
      var alertText = document.createTextNode("There was an error connecting to the database.");
      makeAlert("alert-danger", alertText, "submit-help");
    } else if (result !== "1") {
      console.log(result);
      var alertText = document.createTextNode("There was an error inserting you into the database.");
      makeAlert("alert-danger", alertText, "submit-help");
    } else {
      var alertText = document.createTextNode("Signed up! Redirecting to blog page...");
      makeAlert("alert-success", alertText, "submit-help");
      document.location.assign("../blog");
    }
  }
}


async function login() {
  //form validation
  let email = validateEmail();
  let password = validatePassword();

  //attempt login request to server
  if (email && password) {
    var alertText = document.createTextNode("Attemping to login...");
    makeAlert("alert-warning", alertText, "submit-help");

    password = CryptoJS.SHA512(password);//to avoid sending the actual password over the network
    let result = await loginPost(email, password);
    //remove temporary alert here
    console.log(result);
    if (result === "invalid credentials") {
      var alertText = document.createTextNode("Your email address and/or password was incorrect.");
      makeAlert("alert-warning", alertText, "submit-help");
    } else if (result === "-1"){
      var alertText = document.createTextNode("There was an error connecting to the database.");
      makeAlert("alert-danger", alertText, "submit-help");
    } else if (result !== "1") {
      console.log(result);
      var alertText = document.createTextNode("There was an error with the database.");
      makeAlert("alert-danger", alertText, "submit-help");
    } else {
      var alertText = document.createTextNode("Logged in! Redirecting to blog page...");
      makeAlert("alert-success", alertText, "submit-help");
      document.location.assign("../blog");
    }
  }
}

/* -------------- VALIDATION FUNCTIONS -------------- */

let validateName = function() {
  let name = document.getElementById('name');
  if (name.value.length < 1) {
    var alertText = document.createTextNode("You gotta type a name!");
    makeAlert("alert-warning", alertText, "name-help");
    return null;
  }
  return name.value;
}


let validateEmail = function(){
  let email = document.getElementById('email').value.toLowerCase();
  if (email.length < 1) {
    var alertText = document.createTextNode("You gotta type an email address!");
    makeAlert("alert-warning", alertText, "email-help");
    return null;
  }
  if (email.match(/^.+@.+\..+$/g) === null || email.match(/^.+@.+\..+$/g).length !== 1){
    var alertText = document.createTextNode("That's not a valid email address!");
    makeAlert("alert-warning", alertText, "email-help");
    return null;
  }
  return email;
}


let validatePassword = function(){
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirm-password');
  if (password.length < 5) {
    var alertText = document.createTextNode("Your password is too short!");
    makeAlert("alert-warning", alertText, "password-help");
    return null;
  }
  if (password.length > 20) {
    var alertText = document.createTextNode("Your password is too long!");
    makeAlert("alert-warning", alertText, "password-help");
    return null;
  }
  if (confirmPassword !== null && password !== confirmPassword.value) {
    var alertText = document.createTextNode("Your password does not match!");
    makeAlert("alert-warning", alertText, "password-match-help");
    return null;
  }
  return password;
}

let checkUniqueEmail = async function(email) {
  let result = await checkEmailGet(email);
  console.log(result);
  if (isNaN(parseInt(result)) ) {
      var alertText = document.createTextNode("There was an error connecting to the database.");
      makeAlert("alert-danger", alertText, "email-help");
      return false;
  }
  if (parseInt(result) === -1){
    var alertText = document.createTextNode("There was an error checking your email against the database.");
    makeAlert("alert-danger", alertText, "email-help");
    return false;
  }
  if (parseInt(result) > 0){
    var alertText = document.createTextNode("There is already an account associated with that address!");
    makeAlert("alert-warning", alertText, "email-help");
    return false;
  }
  return true;
}

/* -------------- POST AND GET FUNCTIONS -------------- */

let checkEmailGet = async function(email){
  email = decodeURIComponent(email);
  let response = await fetch("/server/admin.php?email=" + email);
  let result = await response.text();
  return result;
}


let signupPost = async function(email, name, password){
  let response = await fetch("/server/admin.php",
  	{ method: 'POST',
  		headers: {
  			'Content-type': 'application/x-www-form-urlencoded',
  		},
  		body:  'type=signup' +
        '&email=' + decodeURIComponent(email) +
        '&name=' + decodeURIComponent(name) +
        '&password=' + decodeURIComponent(password)
  	});
  let result = await response.text();
  return result;
}


let loginPost = async function(email, password){
  let response = await fetch("/server/admin.php",
  { method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body:  'type=login' +
      '&email=' + decodeURIComponent(email) +
      '&password=' + decodeURIComponent(password)
  });
  let result = await response.text();
  return result;
}
