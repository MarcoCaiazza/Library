const btnBook = document.querySelector("#btn");
const moduleBook = document.querySelector(".moduleBook");
const cancelModule = document.querySelector("#canc");
const containerLibrary = document.querySelector(".containerLibrary");
const form = document.getElementById("form");

moduleBook.style.display = "none";
const createTable = () => {
  const moduleBook = document.querySelector(".moduleBook");
  if (moduleBook.style.display === "none") {
    moduleBook.style.display = "flex";
  }
};

btnBook.addEventListener("click", createTable);

let myLibrary = [];

class BookInfo {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const submitForm = (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;

  myBooks();
};

form.addEventListener("submit", submitForm);

const myBooks = () => {
  let book = new BookInfo(title, author, pages, read);
  let contentBook = document.createElement("div");
  contentBook.className = "contentBook";
  containerLibrary.appendChild(contentBook);
  let parTitle = document.createElement("p");
  let parAuthor = document.createElement("p");
  let parPages = document.createElement("p");
  let parRead = document.createElement("p");
  let contentTitle = document.createTextNode("Title: " + book.title.value);
  let contentAuthor = document.createTextNode("Author: " + book.author);
  let contentPages = document.createTextNode("Pages: " + book.pages);
  let contentRead = document.createTextNode("Read ? : " + book.read);
  parTitle.appendChild(contentTitle);
  parAuthor.appendChild(contentAuthor);
  parPages.appendChild(contentPages);
  parRead.appendChild(contentRead);
  contentBook.appendChild(parTitle);
  contentBook.appendChild(parAuthor);
  contentBook.appendChild(parPages);
  contentBook.appendChild(parRead);
  myLibrary.push(book);
};
