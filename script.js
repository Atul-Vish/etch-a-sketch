const container = document.querySelector(".container");

for (let i = 0; i < 10; i++) {
    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("style", "display: flex; height: 60px; border: 1px solid blue;");

    container.appendChild(parentDiv);
    for (let j = 0; j < 10; j++) {
        const childDiv = document.createElement("div");
        childDiv.setAttribute("style", "width: 60px; border: 1px solid black;");

        parentDiv.appendChild(childDiv);
    }
}
