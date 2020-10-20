// Asynchronous Programming .
// AJAX = Asynchronous Javascript And XML
// By Using AJAX get data without loading page.


document.getElementById("get-data").addEventListener("click",loadData)


/*

open(method, url, async)	Specifies the type of request
       method: the type of request: GET or POST
       url: the server (file) location
       async: true (asynchronous) or false (synchronous)

send()	Sends the request to the server (used for GET)
send(string)	Sends the request to the server (used for POST)

*/


function loadData(){
    //console.log("clicked");
    // create XHR (XML Http Response) object 
    
    let xhr = new XMLHttpRequest()
    //console.log(xhr);
    xhr.open('GET','data.txt',true)

    /*
    status -->
    200: "OK"
    403: "Forbidden"
    404: "Page not found"
    For a complete list go to the Http Messages Reference


    statusText -->	Returns the status-text (e.g. "OK" or "Not Found")
    */

    xhr.onprogress = function(){
        // In this section we can use loader spinner..
        console.log(this.readyState);
    }

    // // old tachnique
    // xhr.onreadystatechange = function(){
    //     /*
    //     onreadystatechange ---->Defines a function to be called when the readyState property changes.
    //     readyState ----> Holds the status of the XMLHttpRequest.
    //                     0: request not initialized
    //                     1: server connection established
    //                     2: request received
    //                     3: processing request
    //                     4: request finished and response is ready
    //     */
    //     //console.log(this.readyState);
    //     if(this.status === 200 && this.readyState ===4){
    //         console.log(this.responseText);
    //     }
    // }

    // update tachnique :
    xhr.onload = function(){
        if(this.status == 200 ){
            document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`
        }
    }


    xhr.send()



}