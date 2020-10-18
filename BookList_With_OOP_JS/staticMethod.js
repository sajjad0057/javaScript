// Practicing Here Static Method in ES6 Classes..

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

    // Here has not been constructor

    static addBookList(book){
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

    static clearFields(){
        let title = document.querySelector('#title').value = ''
        let author = document.querySelector('#author').value = ''
        let isbn = document.querySelector('#isbn').value = ''
    }

    static showAlert(message,className){
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

    static deleteBook(e){
        //console.log(e);
        let target = e.target
        if(target.hasAttribute('href')){
            //console.log(target.parentElement.parentElement);
            target.parentElement.parentElement.remove();
            let isbn = target.parentElement.previousElementSibling.textContent
            console.log(isbn);
            Store.removeBooks(isbn)
            UI.showAlert("Book Removed Successfully.","error")  //also can use this.showAlert()
        }

    }

}

// localStorage Class :

/*
The setItem() method sets the value of the specified Storage Object item.
The getItem() method returns value of the specified Storage Object item.

The setItem() method and getItem() method belongs to the Storage Object, 
which can be either a localStorage object or a sessionStorrage object.
*/

class Store{
    static getBooks(){
        let books 
        if(localStorage.getItem('books') === null){
            books = []
        }
        else{
           books = JSON.parse(localStorage.getItem('books'))     // Syntax : localStorage.getItem(keyname)
        }
        return books
    }

    static addBooks(book){
        let addbook = Store.getBooks()
        addbook.push(book)

        localStorage.setItem('books',JSON.stringify(addbook))    // Syntax : localStorage.setItem(keyname, value)
    }

    static displayBooks(){
        let displayBook = Store.getBooks()
        console.log(displayBook);
        displayBook.forEach(element => {
            UI.addBookList(element)
        });
    }

    static removeBooks(isbn){
        let books = Store.getBooks()
        books.forEach((element,index) => {
            if(element.isbn.trim() == isbn.trim()){     // The trim() method removes whitespace from both sides of a string.  Structure : string.trim()
                books.splice(index,1) // The splice() method adds/removes items to/from an array, and returns the removed item(s).
                                        // Structure : array.splice(index, howmany, item1, ....., itemX)
            }
            
        });

        localStorage.setItem('books',JSON.stringify(books))
    }
}





// Events : 
document.addEventListener('DOMcontentLoaded',Store.displayBooks()); // when page is reloaded, this Eventlistener being Execute automatically.

form.addEventListener('submit',(e)=>{
    //console.log(e);
    let title = document.querySelector('#title').value 
    let author = document.querySelector('#author').value
    let isbn = document.querySelector('#isbn').value
    //console.log(title,author,isbn);


    if(title == '' || author == '' || isbn == ''){
        UI.showAlert('Please Fill Up All The Fields !','error');
    }
    else{
        let book = new Book(title,author,isbn)
        //console.log(book);
        UI.addBookList(book)
        UI.clearFields()
        UI.showAlert("Book Added Successfully !","success")
        
        Store.addBooks(book)

    }



    e.preventDefault()
})

bookList.addEventListener('click',(e) =>{

    UI.deleteBook(e)
})