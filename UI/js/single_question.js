function askQuiz()
{   
    let question_id = document.getElementById("questionId").value;
    let questionID = JSON.stringify({
        "questionId": question_id})
    fetch('http://127.0.0.1:5000/api/v1/questions/question_id', {
        method: 'GET',
        mode:'cors',
        headers: { 'Content-Type': 'application/json',
        'Authorization':'Bearer '+ window.localStorage.getItem('auth_token')},
   
    })
    console.log(questionID)
    .then((resp)=>{
        http_code =resp.status
        // return resp.json();
        console.log(resp);
    })
    .then((resp) => {
       if (http_code == 200) {
           var data = resp.question_id;
           var question=[];
            data.forEach(question => {
               var my_question= "<h3 onclick='showAnswers(this);' id='"+question.question_id+"' key='"+question.question_id+"'><a href='#'>"+question.title+"</a></h3>"+question.body+"<br>";
               question.push(my_question);
           });
           document.getElementById('singleQuestion').innerHTML=all_questions.join('')
       } 
    })
}
