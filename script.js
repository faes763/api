const image = document.querySelector('.cat');
const url = "http://aws.random.cat/meow";
const xhr = new XMLHttpRequest();

document.querySelector('.btn').onclick = function() {
    xhr.open('GET', url);
    xhr.onload = ()=>{
        const src = JSON.parse(xhr.response).file;
        if(image.complete) image.src = src;
    }
    xhr.send();
}

// function fetchHand() {


    // try {
    //     const response = fetch(url);
    //     console.log(response)
    //     // const data =  response.json();
        
    // } catch(error) {
    //     console.log(error)
    // }
// }