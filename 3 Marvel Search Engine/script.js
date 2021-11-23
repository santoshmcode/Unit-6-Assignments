console.log("connected");

const mainContainer = document.getElementById("main-container");
const searchBtn = document.getElementById("search-btn");
const resultContainer = document.getElementById("results-container");
const input = document.getElementById("input");

searchBtn.addEventListener("click", () => {
    // fatchApi();
});

input.addEventListener("keyup", (e) => {
    let value = e.target;
    // fatchApi(e.target.value);
});

const PUBLIC_KEY = "da35a1a7ef103683b22151bf08133393";

const fatchApi = async (query) => {
    console.log("called");

    const ts = 1;
    const hash = "507c10df9d5faa7703d50cdb83d2ba91";
    const res = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${query}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    );

    const data = await res.json();
    console.log("data:", data.data);
    return data.data;
};
// fatchApi();
