window.addEventListener('load', deleteQuestion);
function deleteQuestion(question_id) { 

    fetch('http://127.0.0.1:5000/api/v1/question/'+ question_id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
        'Authorization':'Bearer '+ window.localStorage.getItem('auth_token')},   
    })
    .then((response) => {
            statusCode = response.status
            return response.json()
        })
        .then((response) => {
            if (statusCode == 200){
                alert(response.Message)
            }
            if (statusCode == 401){
                alert(response.Message)
            }
        })}