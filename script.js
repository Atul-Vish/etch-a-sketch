let gridSize = 0;
const container = document.querySelector(".container");

setGrid(16);

const btn = document.querySelector(".change-grid");
btn.addEventListener("click", (event) => {

    gridSize = prompt("Enter num(0-100): ", "");
    if (gridSize > 0 && gridSize <= 100) {
        clearGrid();
        setGrid(gridSize);
    } else {
        alert("Given value was out of range; So no change in defaults!");
    }
})

function setGrid(size) {
    for (let i = 0; i < size; i++) {
        const parentDiv = document.createElement("div");
        parentDiv.classList.add("sub-container");
        parentDiv.setAttribute("style", "flex: auto; display: flex; border: 0.1px solid whitesmoke;");
    
        container.appendChild(parentDiv);
        for (let j = 0; j < size; j++) {
            const childDiv = document.createElement("div");
            childDiv.addEventListener('mouseover', setRandomColor);
            childDiv.setAttribute("style", "flex: auto; border: 0.1px solid whitesmoke;");
            childDiv.classList.add("red");
    
            parentDiv.appendChild(childDiv);
        }
    }
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}

function setRandomColor() {
    const color = getRandomColor();
    this.style.backgroundColor = color; 
}

function clearGrid() {
    const subContainers = document.querySelectorAll(".sub-container");

    subContainers.forEach((item) => {
        container.removeChild(item);
    });
}