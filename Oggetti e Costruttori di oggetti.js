const btnBook = document.querySelector("#btn");
const moduleBook = document.querySelector(".moduleBook");
const containerLibrary = document.querySelector(".containerLibrary");
const containerH1 = document.querySelector(".containerH1");
const read = document.querySelector("#read");

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
    addBookToLibrary();
    removeModule();
  });
};
getBookInfo();

const addBookToLibrary = () => {
  containerLibrary.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i] !== lastBook) {
      displayBook(myLibrary[i], i);
    }
  }
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  const storedMyLibrary = JSON.parse(localStorage.getItem("myLibrary"));
};

const displayBook = (book, i) => {
  let myBook = document.createElement("div");
  myBook.setAttribute("data-id", i);
  myBook.className = "myBook";

  let bookTitle = document.createElement("p");
  bookTitle.textContent = `Title: ${book.title}`;
  myBook.appendChild(bookTitle);

  let bookAuthor = document.createElement("p");
  bookAuthor.textContent = `Author: ${book.author}`;
  myBook.appendChild(bookAuthor);

  let bookPages = document.createElement("p");
  bookPages.textContent = `Pages: ${book.pages}`;
  myBook.appendChild(bookPages);

  let bookRead = document.createElement("p");
  bookRead.textContent = `Read: ${book.read}`;
  myBook.appendChild(bookRead);

  let divImages = document.createElement("div");
  divImages.className = "divImages";

  trashImg = document.createElement("img");
  trashImg.src = "images/icons8-elimina.svg";

  glassesImg = document.createElement("img");
  glassesImg.src = "images/icons8-binocolo.svg";

  divImages.appendChild(glassesImg);
  divImages.appendChild(trashImg);

  myBook.appendChild(divImages);

  containerLibrary.appendChild(myBook);

  trashImg.addEventListener("click", function () {
    let index = myBook.getAttribute("data-id");
    myLibrary.splice(index, 1);
    console.log(myLibrary);
    addBookToLibrary();
  });

  glassesImg.addEventListener("click", function () {
    const changeOptionYes = read.options[0].value;
    const changeOptionNo = read.options[1].value;
    if (read.value === "Yes") {
      read.value = changeOptionNo;
      bookRead.textContent = `Read: ${changeOptionNo}`;
    } else {
      read.value = changeOptionYes;
      bookRead.textContent = `Read: ${changeOptionYes}`;
    }
  });
};

// localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
// const storedMyLibrary = JSON.parse(localStorage.getItem("myLibrary"));
