console.log("connected");

const mainContainer = document.getElementById("main-container");
const searchBtn = document.getElementById("search-btn");
const resultContainer = document.getElementById("results-container");

searchBtn.addEventListener("click", () => {
    mainContainer.style.marginTop = "calc(-100vh + 40px)";
    resultContainer.style.transform = "translateY(-100%)";
});
