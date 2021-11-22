console.log("connected");

const container = document.getElementById("sub-container");
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

addMasaiStudents();
