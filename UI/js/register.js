
document.getElementById('registration').addEventListener('submit', registration);
function registration(evt)
{   
    evt.preventDefault();
    console.log("start fetch");
    let username= document.getElementById("username").value;
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;
    let confirmPassword= document.getElementById("confirmPassword").value;			
    
    let userInfo = JSON.stringify({
        "username":username,
        "email":email,
        "password":password,
        "confirmPassword":confirmPassword
    });
            fetch('http://127.0.0.1:5000/api/v1/auth/signup',{
              method: 'POST',
              headers: {'Content-Type': 'application/json'},  
              mode: "cors",
              body: userInfo
            })
                .then((response) => {
                    console.log(response);
                    status_code = response.status
                    return response.json()
                })
                .then((response) => {
                    if (status_code == 201){
                        window.location = 'login.html';
                    }
                    if (status_code == 401){
                        document.getElementById("error").innerHTML = "User already exists please login";
                    }
                    console.log(response.Message)
                })
                .catch((err) => console.log('There is an error ', err))
             
        }
