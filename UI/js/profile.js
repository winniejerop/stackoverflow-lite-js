window.addEventListener("onload", displayQuestions);
function displayQuestions(){
    return new Promise((resolve, reject) => {
        fetch('http://127.0.0.1:5000/api/v1/questions',{ 
            method: 'GET',
            mode:'cors',
            headers: { 'Content-Type': 'application/json',
            'Authorization':'Bearer '+ window.localStorage.getItem('auth_token')},
        })
        
        .then(response => {
            resp = response.status;
            return resp.json()
        })
        .then((data) => {
            if (response == 200) {
               var data =data.results;
               var all_questions=[];
                  data.forEach(question => {
                  var my_question="<h4 onclick='showAnswers(this);'"
                  +"id='"+question.question_id+"' key='"+question.question_id+"'>"
                  +"<a href='#'>"+question.title+"</a></h4>"
                  +"<p>"+question.body+"</p>"
                  +"<span class='button' id='"+question.question_id+"'"
                  +"onclick='showAnswers(this);'><button>View Answers >></button> </span>"
                  +"<span class='button' id='"+question.question_id+"'"
                  +"onclick='deleteQuestion(this);'><button>Delete</button></span><hr>";
                  all_questions.push(my_question);
          });
          document.getElementById('all_questions').innerHTML=all_questions.join('')
          }
          if (response == 401){
              alert(data.Message)
          }
      
      })
      .catch((err) => console.log("An error Occurred "+err))  

    })}
    displayQuestions();