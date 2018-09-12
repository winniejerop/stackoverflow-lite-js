submitBtn = thisElem("save")
submitBtn.addEventListener('submit',(event)=> {
    event.preventDefault();
    askQuiz();
})
function askQuiz()
    let question = document.getElementById("submitBtn");
    let title = document.getElementById("title").value;
    let body = document.getElementById('Body').value;

    let questionInfo = JSON.stringify({
        "title": title,
        "body": body
    })
    console.log('This is the start of fetch')
    fetch('http://127.0.0.1:5000/api/v1/questions', {
        method: 'POST',
        mode: "cors",
        headers: { 'Content-Type': 'application/json',
        'Authorization':'Bearer '+ window.localStorage.getItem('auth_token')},
        body: questionInfo
    }
    )
        .then((res) => {
            return res.status.json()
        })
        .then((data) => {
            if (res.status == 201) {
                document.getElementById('error').innerHTML = data.message
                
            } else {
                document.getElementById('error').innerHTML = data.message
            }
        })
        .catch((error) => {
            let data = JSON.parse(error)
            console.log(data)
        })