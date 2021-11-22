console.log("connected");

const container = document.getElementById("sub-container");
const scrollTop = document.getElementById("scroll-top");
const clientHeight = document.getElementById("client-height");
const scrollHeight = document.getElementById("scroll-height");
const getBoundingClientRect = document.getElementById(
    "get-bounding-client-rect"
);

const data = container.getBoundingClientRect();
const data2 = container.getClientRects();

scrollTop.innerHTML = container.scrollTop;
clientHeight.innerHTML = container.clientHeight;
scrollHeight.innerHTML = container.scrollHeight;
getBoundingClientRect.innerHTML = JSON.stringify(data, undefined, 4);

let studentCount = 1;

const addMasaiStudents = () => {
    let count = studentCount;
    for (let i = count; i < count + 25; i++) {
        const div = document.createElement("div");
        div.classList.add("student-count");
        div.innerHTML = `Masai Student ${studentCount}`;
        container.appendChild(div);
        studentCount++;
    }
};

container.addEventListener("scroll", () => {
    scrollTop.innerHTML = container.scrollTop;
    clientHeight.innerHTML = container.clientHeight;
    scrollHeight.innerHTML = container.scrollHeight;

    let SCROLL_TOP = container.scrollTop;
    let CLIENT_HEIGHT = container.clientHeight;
    let SCROLL_HEIGHT = container.scrollHeight;

    if (SCROLL_TOP + CLIENT_HEIGHT === SCROLL_HEIGHT) {
        addMasaiStudents();
    }
});

addMasaiStudents();
