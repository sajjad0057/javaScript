//http://api.icndb.com/jokes/random/<number>

document.getElementById('get-data').addEventListener('click',loadJokes);



function loadJokes(){
    let num = document.getElementById('numOfJokes').value
    //console.log(num);
    let xhr = new XMLHttpRequest()
    xhr.open('GET',`http://api.icndb.com/jokes/random/${num}`,true)
    
    //console.log(xhr);
    let x = document.getElementById("spinner")
    xhr.onprogress = function(){
            
            x.className = "spinner-border text-warning"
             
            // console.log(x);

    }
    
    xhr.onload = function(){
       // console.log(this.readyState);
        if(this.status == 200 && this.readyState == 4){
            x.classList.remove("spinner-border")
            let data = JSON.parse(this.responseText)
            //console.log(data);
            let jokes= data.value
            let output = "<ol>"
            jokes.forEach(element => {
                //console.log(element.joke);
                output +=`<li>${element.joke}</li>`
                
            });

            output += "</ol>"
            document.getElementById('output').innerHTML = output

            
        }
    }

    xhr.send()
}
