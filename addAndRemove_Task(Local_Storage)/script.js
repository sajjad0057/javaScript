document.getElementById('root').innerHTML = 'Learning ---- JavaScript :';

// Task Project :
// Define UI element :

let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');


// Define eventListener:
form.addEventListener('submit',(e) =>{
    // console.log('clicked');
    if(taskInput.value === ''){
        alert("Add a Task First !")
    } else{
        let li = document.createElement('li');
        // console.log(li);
        li.appendChild(document.createTextNode(taskInput.value + " "));

        taskList.appendChild(li);
        let link = document.createElement('a');
        link.setAttribute('href','#')
        link.innerHTML = 'X';
        li.appendChild(link)
        storeTaskInLocalStorage(taskInput.value)
        taskInput.value = '';
    }
    e.preventDefault()
});

taskList.addEventListener('click',(e) =>{
    //console.log(e);
    if(e.target.hasAttribute('href')){
        if(confirm("Are You Sure Remove It ??")){
            let ele = e.target.parentElement;
            ele.remove()
            removeFromLS(ele)  // User Define Function - removeFromLs() can Remove Item From Local Storage .
        }
    }
})



// remove item from DOM .

clearBtn.addEventListener('click',(e) =>{
    console.log('Clicked !!');
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }

    localStorage.clear();    // The clear() method removes all the Storage Object item for this domain.
})


filter.addEventListener('keyup',(e) =>{
   let text = e.target.value.toLowerCase();
   console.log(text); 
   document.querySelectorAll('li').forEach(element => {
        let item = element.firstChild.textContent;
        if (item.toLowerCase().indexOf(text)!= -1){
            element.style.display = 'block';
        }else{
            element.style.display = 'none';
        }
   })
})

document.addEventListener('DOMContentLoaded',() =>{
    let Tasks
    if(localStorage.getItem('Tasks') === null){
        Tasks = [];
    }else{
        Tasks = JSON.parse(localStorage.getItem('Tasks'))
    }
    //console.log(Tasks);
    Tasks.forEach(element => {
        let li = document.createElement('li');
        // console.log(li);
        li.appendChild(document.createTextNode(element + " "));

        taskList.appendChild(li);
        let link = document.createElement('a');
        link.setAttribute('href','#')
        link.innerHTML = 'X';
        li.appendChild(link)
        
    });

})



// Define Function
// Store in Local Storage  :

/*
The setItem() method sets the value of the specified Storage Object item.
The setItem() method belongs to the Storage Object, 
which can be either a localStorage object or a sessionStorrage object.

*/


function storeTaskInLocalStorage(task){
    let Tasks
    if(localStorage.getItem('Tasks') === null){
        Tasks = [];
    }else{
        Tasks = JSON.parse(localStorage.getItem('Tasks'))
    }
    Tasks.push(task);
    console.log('----->',Tasks);
    localStorage.setItem('Tasks',Tasks);    // JSON.stringify(Tasks) be used to store Json format data
} 


// remove function for delete Item From Local Storage .

function removeFromLS(taskItem){
    let Tasks
    if(localStorage.getItem('Tasks') === null){
        Tasks = [];
    }else{
        Tasks = JSON.parse(localStorage.getItem('Tasks'))
    }
    
    let li = taskItem
    li.removeChild(li.lastChild)

    Tasks.forEach((task,index) => {
        console.log(task, index);
        if(li.textContent.trim() == task){     // The trim() method removes whitespace from both sides of a string.
            Tasks.splice(index,1);   // The splice() method adds/removes items to/from an array, and returns the removed item(s).
        }

        
    });

    localStorage.setItem('Tasks',JSON.stringify(Tasks));



}


