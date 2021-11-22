console.log("connected");

const container = document.getElementById("containt");
const main = document.getElementById("main");
const searchResults = document.getElementById("search-results");
let timeId;

const input = document.getElementById("search");
input.addEventListener("input", function (e) {
    if (e.target.value.length > 0) {
        searchResults.style.display = "block";
        searchResults.innerHTML = null;
        throttelFunction(e.target.value);
    } else {
        searchResults.setAttribute("style", "display:none");
        searchResults.innerHTML = null;
    }
});

const getSearchResult = async (inputQuery) => {
    const res = await fetch(
        `https://api.pexels.com/v1/search?query=${inputQuery}`,
        {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "563492ad6f917000010000011ab5160f6bc1446185239c2c3ba5842b",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }
    );
    const data = await res.json();
    console.log(data);
    data.photos.forEach((element) => {
        const div = document.createElement("div");
        div.classList.add("search-result-data");
        div.innerHTML = `<img src="${element.src.tiny}" alt="img" /> <span> by ${element.photographer}</span>`;
        searchResults.appendChild(div);
    });
};

// throttel function
function throttelFunction(input) {
    if (timeId) {
        return false;
    }
    timeId = setTimeout(() => {
        getSearchResult(input);
        timeId = null;
    }, 500);
}

let n = 1;

const dynamicCard = (url) => {
    return `<img src="${url}" alt="img" />
                            <div class="content">
                                <div class="vote">
                                    <img src="./assets/up-icon.svg" alt="up-vote" />
                                    <span>${randomNumber(89, 999)}</span>
                                    <img src="./assets/down-icon.svg" alt="down-vote" />
                                </div>
                                <div class="comment">
                                    <img src="./assets/msg-icon.svg" alt="comments" />
                                    <span>${randomNumber(38, 90)}</span>
                                </div>
                                <div class="eye">
                                    <img src="./assets/eye-icon.svg" alt="eye" />
                                    <span> ${randomNumber(1, 7)}k</span>
                                </div>
                            </div>`;
};

const getData = async (pageNo) => {
    const res = await fetch(
        `https://picsum.photos/v2/list?page=${pageNo}&limit=30`
    );
    const data = await res.json();
    return data.forEach((element) => {
        const card = document.createElement("div");
        card.classList.add("image-card");
        card.innerHTML = dynamicCard(element.download_url);
        container.appendChild(card);
    });
};

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
window.onscroll = async function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        const dataContainer = document.createElement("div");
        dataContainer.classList.add("main-data-container", "main-nav");
        n++;

        const getDataAgain = (async (pageNo) => {
            const res = await fetch(
                `https://picsum.photos/v2/list?page=${pageNo}&limit=30`
            );
            const data = await res.json();
            return data.forEach((element) => {
                const card = document.createElement("div");
                card.classList.add("image-card");
                card.innerHTML = dynamicCard(element.download_url);
                dataContainer.appendChild(card);
            });
        })(n);
        // getDataAgain(n);
        main.appendChild(dataContainer);
    }
};

getData(n);

//563492ad6f917000010000011ab5160f6bc1446185239c2c3ba5842b
