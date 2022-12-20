const btnBook = document.querySelector("#btn");
const moduleBook = document.querySelector(".moduleBook");
const cancel = document.querySelector("#cancel");

moduleBook.style.display = "none";
const createTable = () => {
  const moduleBook = document.querySelector(".moduleBook");
  if (moduleBook.style.display === "none") {
    moduleBook.style.display = "flex";
  }
};

btnBook.addEventListener("click", createTable);

const cancelModuleBook = () => {
  moduleBook.style.display = "none";
};
cancel.addEventListener("click", cancelModuleBook);
