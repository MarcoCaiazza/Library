const btnBook = document.querySelector("#btn");
const moduleBook = document.querySelector(".moduleBook");
const containerLibrary = document.querySelector(".containerLibrary");

moduleBook.style.display = "none";

const createModule = () => {
  const moduleBook = document.querySelector(".moduleBook");
  if (moduleBook.style.display === "none") {
    moduleBook.style.display = "flex";
  }
};
const removeModule = () => {
  if (moduleBook.style.display) {
    moduleBook.style.display = "none";
    document.getElementById("form").reset();
  }
};

btnBook.addEventListener("click", createModule);

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const takeBookInfo = () => {
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let book = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(book);
    console.log(myLibrary);
    addBookToLibrary();
    removeModule();
  });
};
takeBookInfo();

const addBookToLibrary = () => {
  for (let i = 0; i < myLibrary.length; i++) {
    displayBook(myLibrary[i]);
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

// addBookToLibrary();
// myLibrary.forEach(function (element) {

// let myBook = document.createElement("div");
// myBook.className = "myBook";
// myBook.innerHTML =
//   "Title: " +
//   item.title +
//   "<br />" +
//   "Author: " +
//   item.author +
//   "<br />" +
//   "Pages: " +
//   item.pages +
//   "<br />" +
//   "Read: " +
//   item.read;
// containerLibrary.appendChild(myBook);
// });
