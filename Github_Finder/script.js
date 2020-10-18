// import UI class from ui.js file

let searchBtn = document.getElementById('searchBtn')
let searchUser = document.querySelector('#searchUser')
let ui = new UI
console.log(ui);
searchBtn.addEventListener('click',(e) =>{
    let userText = searchUser.value 
    if (userText != ''){
        //console.log(userText);
        //fetchApi
        fetch(`https://api.github.com/users/${userText}`)
        .then(result =>result.json())
        .then(data =>{
            if(data.message == 'Not Found'){
               ui.showAlert("User Not Found..","alert alert-danger")
            }
            else{
                ui.showProfile(data)
                searchUser.value='';
            }
        }
        )
   
    }
    else{
        // clear Profile :
        ui.clearProfile()
    }
})