const main = document.querySelector(".page-main");
const footer = document.querySelector(".page-footer");
const menuButton = document.querySelector(".main-nav__menu-button");
const burgerButton =  document.querySelector(".main-nav__button-icon--burger");
const closeButton =  document.querySelector(".main-nav__button-icon--close");

  // main.classList.toggle("page-main--hide");
  // footer.classList.toggle("page-footer--hide");
  // burgerButton.classList.toggle("main-nav__button-icon--hide");
  // closeButton.classList.toggle("main-nav__button-icon--hide");

menuButton.addEventListener('click', function() {
  main.classList.toggle("page-main--hide");
  footer.classList.toggle("page-footer--hide");
  burgerButton.classList.toggle("main-nav__button-icon--hide");
  closeButton.classList.toggle("main-nav__button-icon--hide");
});
