document.getElementById('signin').addEventListener('submit', login);

function login(event){
  event.preventDefault();
  let email= document.getElementById("email").value;
  let password= document.getElementById("password").value;
  let userInfo = JSON.stringify({
        "email":email,
        "password":password,
    })

    console.log("before fetch")
    fetch('http://127.0.0.1:5000/api/v1/auth/login', {
        method: 'POST',
        mode: "cors",
        headers: {'Content-Type': 'application/json'},
        body:userInfo
        }
    )

  .then((req) => {
      http_code = req.status
      return req.json()
  })
  .then((data) => {
    if (http_code.status == 401){
      document.getElementById('errorOccurred').innerHTML = data.message
      }
    if (data.message == 'Successfully logged in.') {
      window.localStorage.setItem('auth_token', data.auth_token)
      console.log(window.localStorage.getItem('auth_token'))
      window.location = 'recentquestions.html'
  }
    else {
      document.getElementById("error").innerHTML = "Wrong credentials please try again";
}
  })
  .catch((err) => {
    console.log(err);
});
}
