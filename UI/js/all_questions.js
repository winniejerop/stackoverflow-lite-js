window.addEventListener('load', fetchAllQuestion);
function fetchAllQuestion() { 

    fetch('http://127.0.0.1:5000/api/v1/questions', {
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
            data.forEach(function (fetchAllQuestion) {
				makeElement(fetchAllQuestion.id, fetchAllQuestion.title, fetchAllQuestion.body);
			});
        });
    })
    .catch((err) => {
        console.log(err);
    });
}