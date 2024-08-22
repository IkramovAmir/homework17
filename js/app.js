const bar = document.querySelector(".header__btn-bar");
const headerListClose = document.querySelector(".header__list-close");
const headerList = document.querySelector(".header__list");
const darkModeBtn = document.querySelector(".header__btn-mode");
const darkModeIcon = document.querySelector(".header__btn-mode");
const body = document.querySelector("body");
darkModeBtn.addEventListener("click", function (){ body.classList.toggle("dark");
darkModeIcon.classList.toggle("fa-moon");darkModeIcon.classList.toggle("fa-sun")

});
bar .addEventListener("click", function () {
    headerList.classList.toggle
     ("header__list-show");
});

headerListClose .addEventListener("click", function(){
    headerList.classList.remove 
     ("header__list-show");
});
