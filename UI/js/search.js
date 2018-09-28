document.getElementById('search-form_3').addEventListener('submit', searchResult);
function searchResult() { 
    return new Promise((resolve, reject) => {
    fetch('http://127.0.0.1:5000/api/v1/questions/results',{
        method: 'GET',
        headers: {'Authorization':'Bearer '+ window.localStorage.getItem('auth_token')},
    })
            .then(response => {
                return response.json();
            })
            .then(data => {
                resolve(data);
                // document.getElementsByClassName('content')="Search results"
            })
            .catch(err => reject(err));
    });
    document.getElementsByClassName('content')="Search results";

}