document.getElementById('submitQuestion').addEventListener('submit', askQuiz);
function askQuiz(evt)
{   
    evt.preventDefault();
    let title = document.getElementById("title").value;
    let body = document.getElementById('body').value;
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
    })
    .then((response) => {
        code = response.status
        return response.json()
    })
    .then((response) => {
        if (code == 201){
            document.getElementById("submitQuestion").reset();
            alert("Question successfully submitted.")
            return response.json();

        }
        if (code == 401){
            alert("A similar question has been posted")
        }
    })
    .catch((err) => console.log('An error Occurred '+err))
}