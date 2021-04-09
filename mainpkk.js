const searchBox = document.querySelector(".search-box");
const navBtnContainer = document.querySelector(".nav-btn-container");
const searchBtn = document.querySelector(".search-btn");
const closehBtn = document.querySelector(".close-btn");

searchBtn.addEventListener("click", () => {
    searchBox.classList.add("active");
    navBtnContainer.classList.add("active");
});

closehBtn.addEventListener("click", () => {
    searchBox.classList.remove("active");
    navBtnContainer.classList.remove("active");
});