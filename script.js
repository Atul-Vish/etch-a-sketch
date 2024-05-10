const container = document.querySelector(".container");

let number = 10;
for (let i = 0; i < number; i++) {
    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("style", "flex: auto; display: flex; height: 60px;");

    container.appendChild(parentDiv);
    for (let j = 0; j < number; j++) {
        const childDiv = document.createElement("div");
        childDiv.setAttribute("style", "flex: auto; width: 60px;");
        childDiv.classList.add("red");

        parentDiv.appendChild(childDiv);
    }
}

const reds = document.querySelectorAll(".red");
reds.forEach((red) => {
    red.addEventListener("mouseover", (event) => {
        red.setAttribute("style", "flex: auto; width: 60px; background-color: red;");
    });
});
