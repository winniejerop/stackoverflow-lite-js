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
                 var data =data.results;
                data.sort(function(a,b) {
                    return b.question_id-a.question_id;
                });
                    var questId =[];
                    data.forEach(question =>{
                        var info="<h4 onclick='showAnswers(this);'"
                        // +"<a href='#'>"+question.title+"</a></h4>"
                        +"Question ID:"+question.question_id+"'><a href='#'>"
                        +question.title+"</a></h4>"+question.body+"<br>\n";
                        questId.push(info);
                    })
            };
                    document.getElementById('recent_questions').innerHTML=questId.join('')
            },
    
        )}

    