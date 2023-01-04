const btnBook = document.querySelector("#btn");
const moduleBook = document.querySelector(".moduleBook");
const conf = document.querySelector("#conf");

moduleBook.style.display = "none";
const createModule = () => {
  const moduleBook = document.querySelector(".moduleBook");
  if (moduleBook.style.display === "none") {
    moduleBook.style.display = "flex";
  }
};

btnBook.addEventListener("click", createModule);

function BookInfo(title, author, pages, read) {
  this.title = document.getElementById("title").value;
  this.author = document.getElementById("author").value;
  this.pages = document.getElementById("pages").value;
  this.read = document.getElementById("read").value;
}

let myLibrary = [];

const createBook = () => {
  let book = new BookInfo(title, author, pages, read);
  myLibrary.push(book);
  console.log(myLibrary);
};
conf.addEventListener("click", createBook);
