const myLibrary = []; 
count = 1;

function Book(mytitle, myauthor, myISBN) {
    //constructor for books
    this.title = mytitle;
    this.author = myauthor;
    this.ISBN = myISBN;
}

function addBooktoLibrary(title, author, ISBN) {
    //take params, create a book then store it in the array
    let myBook = new Book(title, author, ISBN);
    myLibrary.push(myBook);
    let container2 = document.querySelector("#container2");
    let bookVersion = "book" + count.toString();
    let bookContainer = document.createElement("div");
    bookContainer.setAttribute("id", bookVersion);
    bookContainer.setAttribute("style", "width: 200px; height: 300px; background-color: lightblue; margin:10px;");
    let someTitle = document.createElement("div");
    someTitle.textContent = title;
    let someAuthor = document.createElement("div");
    someAuthor.textContent = author;
    let someISBN = document.createElement("div");
    someISBN.textContent = ISBN;

    let checkcontainer = document.createElement("div");
    checkcontainer.setAttribute("id", "checkcontain");
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "acheck");
    let textCheck = document.createElement("label");
    textCheck.setAttribute("for", "checkMark");
    textCheck.textContent = "Read";
    
    let deleteThis = document.createElement("button");
    deleteThis.textContent = "Delete";
    deleteThis.addEventListener("click", () => {
            container2.removeChild(container2.lastElementChild);
            myLibrary.pop();
    })
    container2.appendChild(bookContainer);
    bookContainer.appendChild(someTitle);
    bookContainer.appendChild(someAuthor);
    bookContainer.appendChild(someISBN);
    bookContainer.appendChild(checkcontainer);
    checkcontainer.appendChild(checkBox);
    checkcontainer.appendChild(textCheck);
    bookContainer.appendChild(deleteThis);
    
}

/*function bookStructure(title, author, ISBN) {
    let bookVersion = "book" + count.toString();
    let bookContainer = document.createElement("div");
    bookContainer.setAttribute("id", bookVersion);
    bookContainer.setAttribute("style", "width: 50px; height: 100px;");
    let someTitle = document.createElement("div");
    someTitle.textContent = title;
    let someAuthor = document.createElement("div");
    someAuthor.textContent = author;
    let someISBN = document.createElement("div");
    someISBN.textContent = ISBN;
    let deleteThis = document.createElement("button");
    deleteThis.textContent = "Delete";
    deleteThis.addEventListener("click", () => {

            container2.removeChild(container2.lastElementChild);
        
    })
    container2.appendChild(bookContainer);
    bookContainer.appendChild(someTitle);
    bookContainer.appendChild(someAuthor);
    bookContainer.appendChild(someISBN);
    bookContainer.appendChild(deleteThis);


}*/

addBooktoLibrary("Harry Potter", "JK Rowling", 13)
let aBook = document.querySelector("#newBook");
let container = document.querySelector("#container");
let aDialog = document.querySelector("#aDialog");
aDialog.setAttribute("id", "somedialog");
console.log(aBook);
aBook.addEventListener("click", (e) => {
    aDialog.showModal();
    let aTitle = document.createElement("div");
    aTitle.classList.add("title")
    aTitle.textContent = "Title  ";
    let aTitleForm = document.createElement("input");
    aTitleForm.setAttribute("type", "text");
    aTitleForm.setAttribute("id", "titleform");
    
    let anAuthor = document.createElement("div");
    anAuthor.classList.add("author");
    anAuthor.textContent = "Author  ";
    let anAuthorForm = document.createElement("input");
    anAuthorForm.setAttribute("type", "text");
    anAuthorForm.setAttribute("id", "authorform");

    let anISBN = document.createElement("div");
    anISBN.classList.add("ISBN");
    anISBN.textContent = "ISBN  ";
    let anISBNForm = document.createElement("input");
    anISBNForm.setAttribute("type", "number");
    anISBNForm.setAttribute("id", "ISBNform");

    

    aDialog.appendChild(aTitle);
    aTitle.appendChild(aTitleForm);
    aDialog.appendChild(anAuthor);
    anAuthor.appendChild(anAuthorForm);
    aDialog.appendChild(anISBN);
    anISBN.appendChild(anISBNForm);
     

    let buttonclick = document.createElement("button");
    buttonclick.classList.add("press");
    buttonclick.textContent = "Press Me";
    
    buttonclick.addEventListener("click", () => {
        let titleresult = document.getElementById("titleform").value;
        let authorresult = document.getElementById("authorform").value;
        let ISBNresult = document.getElementById("ISBNform").value;
        addBooktoLibrary(titleresult, authorresult, ISBNresult);
        
        console.log(myLibrary);
        while(aDialog.lastElementChild) {
            aDialog.removeChild(aDialog.lastElementChild);
        }
        aDialog.close();

    })
    aDialog.appendChild(buttonclick)
    
    
    
})

console.log(myLibrary);