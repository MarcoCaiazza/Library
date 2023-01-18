const btnBook = document.querySelector("#btn");
const moduleBook = document.querySelector(".moduleBook");
const containerLibrary = document.querySelector(".containerLibrary");
const containerH1 = document.querySelector(".containerH1");

containerH1.appendChild(moduleBook);
moduleBook.style.display = "none";

let lastBook;
let myLibrary = [];

let createModule = () => {
  if (containerH1.innerHTML !== "") {
    moduleBook.style.display = "flex";
  }
};
const removeModule = () => {
  if (moduleBook.style.display === "flex") {
    moduleBook.style.display = "none";
    document.getElementById("form").reset();
  }
};
btnBook.addEventListener("click", createModule);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const getBookInfo = () => {
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let book = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(book);
    console.log(myLibrary);
    addBookToLibrary();
    removeModule();
  });
};
getBookInfo();

const addBookToLibrary = () => {
  containerLibrary.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i] !== lastBook) {
      displayBook(myLibrary[i]);
    }
  }
};

const displayBook = (book) => {
  let myBook = document.createElement("div");
  myBook.className = "myBook";

  let bookTitle = document.createElement("p");
  bookTitle.textContent = `${book.title}`;
  myBook.appendChild(bookTitle);

  let bookAuthor = document.createElement("p");
  bookAuthor.textContent = `${book.author}`;
  myBook.appendChild(bookAuthor);

  let bookPages = document.createElement("p");
  bookPages.textContent = `${book.pages}`;
  myBook.appendChild(bookPages);

  let bookRead = document.createElement("p");
  bookRead.textContent = `${book.read}`;
  myBook.appendChild(bookRead);

  containerLibrary.appendChild(myBook);
};
