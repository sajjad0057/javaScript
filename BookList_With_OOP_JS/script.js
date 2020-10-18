let heading = document.getElementById('heading')
let center = document.createElement('center')
center.innerHTML = "Learning ------- JavaScript (ES6)"
heading.appendChild(center)


//console.log(heading);

// BOOK list Project ES6 Code :

// UI Elements :

let form = document.getElementById('book_form')
let bookList = document.querySelector('#book_list')

// Book Class 
class Book {
    constructor(title,author,isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

// UI CLass :

class UI {
    constructor(){

    }

    addBookList(book){
        //console.log(book);
        let  list = document.querySelector('#book_list')
        let row = document.createElement('tr')

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#">X</a></td>`
        // let td = document.createElement('td')
        // let link = document.createElement('a')
        // link.setAttribute('href','#')
        // link.innerHTML = 'X'
        // td.appendChild(link)
        // row.appendChild(td)
        list.appendChild(row)
        //console.log(list);
      
    }

    clearFields(){
        let title = document.querySelector('#title').value = ''
        let author = document.querySelector('#author').value = ''
        let isbn = document.querySelector('#isbn').value = ''
    }

    showAlert(message,className){
        let div = document.createElement('div')
        div.className = `${className}`  
        div.appendChild(document.createTextNode(message))
        let container  = document.querySelector('.container')
        let form = document.querySelector('#book_form')
        container.insertBefore(div,form)  // Syntax : node.insertBefore(newnode, existingnode)

        setTimeout(() =>{
            document.querySelector(`.${className}`).remove()
        },2500)


    }

    deleteBook(e){
        //console.log(e);
        let target = e.target
        if(target.hasAttribute('href')){
            //console.log(target.parentElement.parentElement);
            target.parentElement.parentElement.remove();
            this.showAlert("Book Removed Successfully.","error")
        }

    }



}


// Events : 

form.addEventListener('submit',(e)=>{
    //console.log(e);
    let title = document.querySelector('#title').value 
    let author = document.querySelector('#author').value
    let isbn = document.querySelector('#isbn').value
    //console.log(title,author,isbn);

    let ui = new UI()
    if(title == '' || author == '' || isbn == ''){
        ui.showAlert('Please Fill Up All The Fields !','error');
    }
    else{
        let book = new Book(title,author,isbn)
        //console.log(book);
        ui.addBookList(book)
        ui.clearFields()
        ui.showAlert("Book Added Successfully !","success")
    

    }



    e.preventDefault()
})

bookList.addEventListener('click',(e) =>{
    let ui = new UI
    ui.deleteBook(e)
})





