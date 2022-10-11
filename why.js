const userURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
    const headers = {
        'content-type': 'application/json'
    };
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if(response.ok) {
            return response.json();
        }else {
            return response.json().then(error =>{
                const e = new Error('всё плохо')
                e.data = error;
                throw e;
            })
        }
    });
}

// sendRequest('GET', userURL)
//     .then(data=> console.log(data))
//     .catch(err => console.log(err));

const body = {
    name: "Oleg",
    age: 12
}
sendRequest('POST', userURL, body)
    .then(data=> console.log(data))
    .catch(err => console.log(err));