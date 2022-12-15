const btnBook = document.querySelector("#btn");
const module = document.querySelector(".module");
const cancel = document.querySelector(".cancel");

const createTable = () => {
  const module = document.querySelector(".module");
  if (module.style.display === "none") {
    module.style.display = "flex";
  }
};
btnBook.addEventListener("click", createTable);
module.style.display = "none";
const cancelForm = () => {
  module.style.display = "none";
};
cancel.addEventListener("click", cancelForm);

let myLibrary = [];

function Book() {}

function addBookToLibrary() {}
