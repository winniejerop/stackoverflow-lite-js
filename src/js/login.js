loginBtn = thisElem('loginButton')
loginBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  login();
});

function login(){
  let email = thisElem("email").value;
  let password = thisElem("password").value;
  let userInfo = JSON.stringify({
        "email":email,
        "password":password,
    })
    console.log("before fetch")
    fetch('http://127.0.0.1:5000/api/auth/login', {
        method: 'POST',
        mode: "cors",
        headers: {'Content-Type': 'application/json'},
        body:userInfo
        }
    )
    .then((res) => {
        if (res.status == 200){
            res.json().then((data) => {
              console.log(data);
              localStorage.setItem("AuthToken", data["AuthToken"]);
              window.location = "questions.html";
            });
          }
        else{
        res.json().then((data) => {
          console.log("Failed: \n"+data);
        });
      }
    })
           
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
};

 

