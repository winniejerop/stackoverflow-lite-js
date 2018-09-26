
function searchResult() { 
    return new Promise((resolve, reject) => {
    fetch('http://127.0.0.1:5000/api/v1/questions/results', )
            .then(response => {
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(err => reject(err));
    });
}