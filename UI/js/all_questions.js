
window.addEventListener('load', fetchAllQuestions);
function fetchAllQuestions() { 
    fetch('http://127.0.0.1:5000/api/v1/questions', {
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
                // let  parentElement = document.getElementById('allQuestions');
                 var data =data.results;
                var all_questions=[];
                    data.forEach(question => {
                    var my_question="<h4 onclick='showAnswers(this);' id='"+question.question_id+"' key='"+question.question_id+"'><a href='#'>"+question.title+"</a></h4>"+question.body+"<br>";
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
function showAnswers(e){
    // alert('show answer for question'+e.id);
   var question_id=e.id;
   //get question
//  document.getElementsByTagName('h3').style='display:hidden';
   fetch('http://127.0.0.1:5000/api/v1/questions/'+question_id, {
       method: 'GET',
       mode:'cors',
       headers: { 'Content-Type': 'application/json',
       'Authorization':'Bearer '+ window.localStorage.getItem('auth_token')},
      
   })
   .then((resp)=>{
       http_code =resp.status
       return resp.json();
    //    console.log(resp.json());
   })
   .then((resp) => {
      if (http_code == 200) {
          resp=resp.results
          var question = resp.question;
          var answers = resp.answers;

          var question=question[0];
    document.getElementById('all_questions').innerHTML="<h3>"+question.title+"</h3><br>"+question.body
    +"<br><h4>Answers</h4><br><span id='answers'></span>";

    displayAnswer(answers);

    displayTextArea(question.question_id);
      } 
   });
   //get answer for the above question
}
function displayAnswer(answers) {
    var rows=[];
    answers.forEach(answer => {
       var my_answer= "postedBy: "+answer.user_id+"<br><p>"+answer.answer_body+"</p><hr/><br>";
       rows.push(my_answer);
   });
    rows.push("<span id='textarea_display'></span>");
   document.getElementById('answers').innerHTML=rows.join('');

}
//post answer
function displayTextArea(question_id){

        var html="<br/><h4>Add Answer</h4>"
        +"<form id='postAnswer' method='POST'>"
        +"<textarea id='answerBody'class='input_control' placeholder='Answer' required></textarea>"
        +"<br>"
        +"<button class='button' id='"+question_id+"' onclick='addAnswer(this)'>Post Answer</button>"
        +"</form>";
        document.getElementById('textarea_display').innerHTML=html;
}
function addAnswer(e){
    console.log(e.id);
    let answer_body = document.getElementById("answerBody").value;
    console.log(answer_body);
    let answer = JSON.stringify({
        "answerBody": answer_body})

    fetch('http://127.0.0.1:5000/api/v1/questions/'+e.id+'/answers', {
       method: 'POST',
       mode:'cors',
       headers: { 'Content-Type': 'application/json',
       'Authorization':'Bearer '+ window.localStorage.getItem('auth_token')},
       body: answer 
      
   })
   .then((resp)=>{
       http_code =resp.status
       return resp.json();
    //    console.log(resp);
   })
   .then((resp) => {
    if (http_code == 200){
        document.getElementById("postAnswer").reset();
        document.write("Answer successfully posted.");
        

}
})
.catch((err) => console.log('An error Occurred '+err))
}
