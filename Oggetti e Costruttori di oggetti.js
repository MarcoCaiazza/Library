const btnBook = document.querySelector("#btn");
const moduleBook = document.querySelector(".moduleBook");
const cancelModule = document.querySelector("#canc");
const containerLibrary = document.querySelector(".containerLibrary");
const title = document.getElementById("title");
const glassesImg = document.getElementById("images/icons8-binocolo.svg");

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

// const getValidation = (title) => {
//   console.log(title);
//   if (title.validity.typeMismatch) {
//     title.setCustomValidity("Enter a title.");
//     title.reportValidity();
//   } else {
//     title.setCustomValidity("");
//   }
// };

// risolvere problema scope and clouses
const submitForm = (e) => {
  // title.addEventListener("input", (e) => getValidation(e));
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  myBooks();
  document.getElementById("form").reset();
  moduleBook.style.display = "none";
};

const cancelOperationModule = () => {
  moduleBook.style.display = "none";
};

form.addEventListener("submit", submitForm);
canc.addEventListener("click", cancelOperationModule);

const changeRead = () => {
  contentRead = document.getElementById("contentRead");
  if (contentRead == "yes") {
    contentRead.innerHTML = "No";
  }
};

const deleteBook = () => {
  let contentBook = document.getElementById("myContentBook");
  console.log(contentBook);
  let removeBook = containerLibrary.removeChild(contentBook);
};

const myBooks = () => {
  let contentBook = document.createElement("div");
  contentBook.className = "contentBook";
  contentBook.id = "myContentBook";
  containerLibrary.appendChild(contentBook);
  let divImages = document.createElement("div");
  divImages.className = "divImages";
  let trashImg = document.createElement("img");
  trashImg.src = "images/icons8-elimina.svg";
  let glassesImg = document.createElement("img");
  glassesImg.src = "images/icons8-binocolo.svg";
  divImages.appendChild(glassesImg);
  divImages.appendChild(trashImg);
  contentBook.appendChild(divImages);
  glassesImg.addEventListener("click", changeRead);
  trashImg.addEventListener("click", deleteBook);
  let parTitle = document.createElement("p");
  let parAuthor = document.createElement("p");
  let parPages = document.createElement("p");
  let parRead = document.createElement("p");
  let book = new BookInfo(title, author, pages, read);
  let contentTitle = document.createTextNode("Title: " + book.title.value);
  let contentAuthor = document.createTextNode("Author: " + book.author.value);
  let contentPages = document.createTextNode("Pages: " + book.pages.value);
  let contentRead = document.createTextNode("Read ? : " + book.read.value);
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
