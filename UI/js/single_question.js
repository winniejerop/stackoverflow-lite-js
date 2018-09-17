//Get a single question
function getQuestion()
fetch('http://127.0.0.1:5000/api/v1/questions/id', {
    method: 'GET',
    mode:'cors',
    headers: {
        'Content-Type': 'application/json',
        "Authorization":"JWT" +localStorage.getItem('auth_token')
    },

})
.then((res) => {
    res.json().then((data) => {
        console.log(data)
        data.forEach(function (getQuestion) {
            makeElement(getQuestion.id, getQuestion.title, getQuestion.body);
        });
    });
})
.catch((err) => {
    console.log(err);
});



