console.log("connected");

const mainContainer = document.getElementById("main-container");
const searchBtn = document.getElementById("search-btn");
const resultContainer = document.getElementById("result-container");
const input = document.getElementById("input");
const searchResult = document.getElementById("input-box-next");
const PUBLIC_KEY = "da35a1a7ef103683b22151bf08133393";
const backBtn = document.getElementById("back");
const comicData = document.getElementById("comic-data");
const thumbnailImg = document.getElementById("thumbnail-img");
const comicTitle = document.getElementById("comic-title");

var timeId = null;

searchBtn.addEventListener("click", () => {
    // fatchApi();
});

input.addEventListener("keyup", (e) => {
    let { value } = e.target;
    value === "" ? (searchResult.innerHTML = null) : "";
    searchResult.innerHTML = null;
    let data = throttelFunction(value, 250);
});

function throttelFunction(query, delay) {
    if (!timeId) {
        timeId = setTimeout(() => {
            fatchApi(query);
            clearTimeout(timeId);
            timeId = null;
        }, delay);
    } else {
        return;
    }
}

const fatchApi = async (query) => {
    console.log("called");

    const ts = 1;
    const hash = "507c10df9d5faa7703d50cdb83d2ba91";
    const res = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${query}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    );

    const data = await res.json();
    populateSearchResult(data.data);
};
// fatchApi("hulk");

const populateSearchResult = (data) => {
    // console.log("data:", data);

    let { results } = data;

    for (let i = 0; i < results.length; i++) {
        const div = document.createElement("div");
        div.classList.add("p-results");

        let { title, id } = results[i];
        const titleDiv = document.createElement("p");

        div.addEventListener("click", () => {
            console.log("Hi");
            console.log("resultContainer", resultContainer);
            resultContainer.style.marginTop = "calc(-100vh + 20px)";
            input.value = null;
            populateDetailData(id);
        });

        titleDiv.innerHTML = title;

        div.appendChild(titleDiv);
        searchResult.appendChild(div);
    }
};

const populateDetailData = async (id) => {
    console.log("called");

    const ts = 1;
    const hash = "507c10df9d5faa7703d50cdb83d2ba91";
    const res = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    );

    const data = await res.json();
    const results = data.data.results[0];
    console.log("data:", data.data.results[0]);
    const {
        title,
        thumbnail: { path },
        creators: { items, available },
        prices: { type, price },
    } = results;
    for (let i = 0; i < available || i < 5; i++) {
        console.log(items[i].role, items[i].name);
        const roleDiv = document.createElement("div");
        const nameDiv = document.createElement("div");
        roleDiv.innerHTML = items[i].role;
        nameDiv.innerHTML = items[i].name;
        comicData.appendChild(roleDiv);
        comicData.appendChild(nameDiv);
    }

    if (type) {
        const typeDiv = document.createElement("div");
        const priceDiv = document.createElement("div");
        typeDiv.innerHTML = type;
        priceDiv.innerHTML = price;
        comicData.appendChild(typeDiv);
        comicData.appendChild(priceDiv);
    }

    thumbnailImg.src = `${path}/portrait_uncanny.jpg`;
    comicTitle.innerHTML = title;
    console.log("title, path:", title, `${path}/portrait_uncanny.jpg`);
};

backBtn.addEventListener("click", () => {
    resultContainer.style.marginTop = "calc(100vh + 20px)";
    comicData.innerHTML = null;
    comicTitle.innerHTML = null;
    thumbnailImg.src = null;
    searchResult.innerHTML = null;
});
