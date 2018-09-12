
signUpBtn = thisElem("registerBtn")
registerBtn.addEventListener('onClick', (event) => {
  event.preventDefault();
  registration();
});

function registration()
{
    let username= document.getElementById("username").value;
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;
    let confirmPassword= document.getElementById("confirmPassword").value;			
    
    let userInfo = JSON.stringify({
        "username":username,
        "email":email,
        "password":password,
        "confirmPassword":confirmPassword
    })
    console.log("before fetch")
    fetch('http://127.0.0.1:5000/api/auth/signup', {
        method: 'POST',
        mode: "cors",
        headers: {'Content-Type': 'application/json'},
        body:userInfo
        }
    )
    .then((data) => {
        if (http_code != 201){
            document.getElementById('error').innerHTML = data.message
        }else{
            window.location = 'login.html'
        }
    })

    .catch((error) => {
        let data = JSON.parse(error)
        console.log(data)
    })
console.log("after fetch")               

};
