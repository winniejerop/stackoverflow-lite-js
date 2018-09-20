//Get a single question
function getQuestion()
fetch('http://127.0.0.1:5000/api/v1/questions/question_id', {
    method: 'GET',
    mode:'cors',
    headers: {
        'Content-Type': 'application/json',
        "Authorization":"JWT" + localStorage.getItem('auth_token')
    },

})
    .then((response) => {
            status_code = response.status
            return response.json()
        })
        .then((response) => {
            if (status_code == 200){
                let  parentElement = document.getElementById("allQuestions");
                let title = document.createElement('h3');
                let titleText = document.createTextNode(response.questions.title);
                let body = document.createElement('p');
                let contentText = document.createTextNode(response.questions.body);
                let textarea = document.createElement('textarea');
                let answerButton = document.createElement('input');
                let br = document.createElement('BR');
                textarea.setAttribute('class', 'textarea');
                textarea.setAttribute('rows', '2');
                textarea.setAttribute('cols', '60');
                textarea.setAttribute('id','submit_q');
                answerButton.setAttribute('class', 'submit_q');
                answerButton.setAttribute('id','submitAnswer');
                textarea.setAttribute('placeholder', 'Your Answer');
                textarea.setAttribute('id', 'textarea');
                answerButton.setAttribute('id', 'submitAnswer');
                answerButton.setAttribute('value', 'Reply')
                answerButton.addEventListener('click',postAnswerData)
                body.appendChild(contentText);
                title.appendChild(titleText);
                parentElement.appendChild(title)
                parentElement.appendChild(body);
                parentElement.appendChild(textarea);
                parentElement.appendChild(br);
                parentElement.appendChild(answerButton);
                let heading = document.createElement('h3')
                heading.innerHTML='Answers:'
                body.appendChild(heading)
                for (let answer in response.Question.answers){
                    let elemH6 = document.createElement('h6');
                    elemH6.innerHTML = response.Question.answers[answer].answer_body;
                    body.appendChild(elemH6)
                }
            }
            if (statusCode == 401){
                alert(response.Message)
            }
        
        })
        .catch((err) => console.log('An error occurred '+err))