const elHamburgerBtn = document.querySelector(".hamburger-menu");
const elHamburgerBtnClose = document.querySelector(".hamburger-menu-close");

const elHeader = document.querySelector(".header");

elHamburgerBtn.addEventListener("click", function(){
  elHeader.classList.toggle("header--open")
})

elHamburgerBtnClose.addEventListener("click", function(){
  elHeader.classList.remove("header--open")
})




// const elHamburgerBtn = document.querySelector(".site-header__hamburger");
// const elHamburgerBgClose = document.querySelector(".site-header__mobile-bg");

// const elHeader = document.querySelector(".site-header")

// elHamburgerBtn.addEventListener("click", function(){
//   elHeader.classList.toggle("site-header--open")
// })

// elHamburgerBgClose.addEventListener("click", function(){
//   elHeader.classList.remove("site-header--open")
// })