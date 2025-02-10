const myLibrary = []; 

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
}

function bookStructure(title, author, ISBN) {

}

addBooktoLibrary("Harry Potter", "JK Rowling", 13)
let aBook = document.querySelector("#newBook");
let container = document.querySelector("#container");
console.log(aBook);
aBook.addEventListener("click", (stat) => {
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

    container.appendChild(aTitle);
    aTitle.appendChild(aTitleForm);
    container.appendChild(anAuthor);
    anAuthor.appendChild(anAuthorForm);
    container.appendChild(anISBN);
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
        while(container.lastElementChild) {
            container.removeChild(container.lastElementChild);
        }
     
   
    })
    container.appendChild(buttonclick)
    
    
    
})

console.log(myLibrary);