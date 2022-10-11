const userURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject)=> {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';
        
        xhr.setRequestHeader('content-type', 'application/json')

        
        xhr.onload = ()=>{
            if(xhr.status >= 400) {
                reject(xhr.response)
            }else {     
                resolve(xhr.response)
            }
        }
        
        xhr.onerror = ()=> {
            reject(xhr.response)
        }
        
        xhr.send(JSON.stringify(body));
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