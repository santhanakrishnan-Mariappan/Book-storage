var d= new Date()
//book class
var Delete = document.querySelector(".deletee");
// Delete.onclick = alert("efad");s

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//ui class
class UI {
  static displayBooks() {
    document.addEventListener("submit", function (e) {
      e.preventDefault();

      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const isbn = document.getElementById("isbn").value;
      let book = new Book(title, author, isbn);

      if (title === "" || author === "" || isbn === "") {
        alert("please enter valid data");
      } else {
        UI.addBookList(book);

        UI.clearFields();

        alert("Your book has been added to the list");
      }
    });
  }
//   remove a book
  static deleteBook(a){
      if(a.classList.contains("delete")){
          a.parentElement.remove()
          alert('Book has been deleted')
      }

  }

  // adding a book

  static addBookList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");

    row.innerHTML = `<td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td>${d}</td>
     <h1 class= "btn btn-danger btn-sm delete"> X </h1>`;
    list.append(row);
  }

  // Clear Fields
  static clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

//display a book
document.addEventListener("DOMContentLoaded", UI.displayBooks());

//Remove a book
document.querySelector("#book-list").addEventListener('click',function(e){
    UI.deleteBook(e.target)
    
})

//Local Storage for books
