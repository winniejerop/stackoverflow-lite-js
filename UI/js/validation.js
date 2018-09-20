function checkSignUpForm()
  {
    // validation fails if the email is blank
    var email= document.forms["signUp"]["email"].value;
    if(email == "") {
      alert("Error: email is empty!");
      document.forms["signUp"]["email"].focus();
      return false;
    }email
    // validation fails if the username input is blank
    var username= document.forms["signUp"]["username"].value;
    if(username == "") {
      alert("Error: username is empty!");
      document.forms["signUp"]["username"].focus();
      return false;
    }
    // regular expression to match only alphanumeric characters and spaces
    var re = /^[\w ]+$/;
    // validation fails if the username doesn't match the regular expression
    if(!re.test(username)) {
      alert("Error: Username contains invalid characters!");
      document.forms["signUp"]["username"].focus();
      return false;
    }
    
    // validation fails if the password field is blank
    var password=document.forms["signUp"]["password"].value;
    if(password == ""){
        alert("Error: password is empty!");
        document.forms["signUp"]["password"].focus();
        return false;
    }
    // validation fails if the confirm password field is blank
    var confirm_password = document.forms["signUp"]["confirm_password"].value;
    if(confirm_password == ""){
        alert("Error: confirm password is empty");
        document.forms["signUp"]["confirm_password"].focus();
        return false;
    }
    // validation fails if the password and confirm password doesn't match
    if(password != confirm_password){
        alert("Password doesn't match try again");
        document.forms["signUp"]["confirm_password"].focus();
        return false;
    }
}
function checkSignInForm(){
    // validation fails if the email is blank
    var email= document.forms["logIn"]["email"].value;
    if(email == ""){
        alert("Error: Email is empty");
        document.forms["logIn"]["email"].focus();
        return false;
    }
    // validation fails if the password field is blank
    var password = document.forms["logIn"]["password"].value;
    if(password==""){
        alert("Error: Password is empty");
        document.forms["logIn"]["password"].focus();
        return false;
    }
}
