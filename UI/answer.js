window.addEventListener('load', postAnswer);
function postAnswer() { 
    fetch('http://127.0.0.1:5000/api/v1/questions/question_id/answers', {
        method: 'GET',
        mode:'cors',
        headers: { 'Content-Type': 'application/json',
        'Authorization':'Bearer '+ window.localStorage.getItem('auth_token')},
    })
          .then((resp) => {
              http_code = resp.status
              return resp.json()
          })
          .then((data) => {
              if (http_code == 200) {
                let  parentElement = document.getElementById('allQuestions');
                 var data =data.results;
                // // console.log(data.questions);
                var all_questions=[];
                    data.forEach(question => {
                    var my_question="<h3><a href='answer.html'>"+question.title+"</a></h3>"+question.body+"<br>";
                    all_questions.push(my_question);
            });
            document.getElementById('all_questions').innerHTML=all_questions.join('')
            }
            if (http_code == 401){
                alert(data.Message)
            }
        
        })
        .catch((err) => console.log("An error Occurred "+err))
        
        
        
}