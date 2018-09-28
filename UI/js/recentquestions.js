window.addEventListener('load', fetchAllQuestions);
// Handles the retrieval of the recently asked questions from the db
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
                 var data =data.results;
                 //sort in descending order
                 data.sort(function(a,b) {
                    return b.question_id-a.question_id;
                });
                    var questId =[];
                    //loop
                    data.forEach(question =>{
                        var info="<h4"
                        +"Question ID:"+question.question_id+ "></br>"
                        +question.title+"</br></h4>"+question.body+"<br><hr>";
                        questId.push(info);
                    })
            };
                    document.getElementById('recent_questions').innerHTML=questId.join('')
            },
    
        )}

    