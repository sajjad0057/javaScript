// Create Promise :

let prom = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let a = 1+1;
        if(a==2){
            resolve('Success')
    
        }
        else{
            reject('Failed');
        }

    },3000)

})

// //.then .catch

prom.then((message)=>{
    console.log("resolve has been called :" + message);
})
.catch(message =>{
    console.log("reject has been called :" + message);
})

console.log("I am after Promise");







//Using  fetch API  with Promise :

fetch('http://api.icndb.com/jokes/random/600')
.then(response =>response.json())
.then(data =>console.log(data))

console.log('after Promise');






// Uses Of "async" and "await"  keyWord

async function getJokes(){
    let response = await fetch('http://api.icndb.com/jokes/random/600')
    let data = await response.json()
    return data
}

getJokes().then(jokes =>console.log(jokes))