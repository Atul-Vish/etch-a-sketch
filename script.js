let gridSize = 0;
let tool = "red";
const container = document.querySelector(".container");

setGrid(16);

const changeGrid = document.querySelector(".change-grid");
changeGrid.addEventListener("click", (event) => {

    gridSize = prompt("Enter num(0-100): ", "");
    if (gridSize > 0 && gridSize <= 100) {
        setGrid(gridSize);
    } else {
        alert("Given value was out of range; So no change in defaults!");
    }
})

const reset = document.querySelector(".reset");
reset.addEventListener("click", function() {
    setGrid(16);
});

const red = document.querySelector(".red");
red.addEventListener("click", function() {
    tool = "red";
});

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", function() {
    tool = "rainbow";
})

function setGrid(size) {
    clearGrid();
    for (let i = 0; i < size; i++) {
        const parentDiv = document.createElement("div");
        parentDiv.classList.add("sub-container");
        parentDiv.setAttribute("style", "flex: auto; display: flex; border: 0.1px solid whitesmoke;");
    
        container.appendChild(parentDiv);
        for (let j = 0; j < size; j++) {
            const childDiv = document.createElement("div");
            childDiv.addEventListener('mouseover', setColor);
            childDiv.setAttribute("style", "flex: auto; border: 0.1px solid whitesmoke;");
            childDiv.classList.add("red");
    
            parentDiv.appendChild(childDiv);
        }
    }
}

function setColor() {
    if (tool === "red") {
        this.style.backgroundColor = "#DC2626";
    } else if (tool === "rainbow") {
        this.style.backgroundColor = getRandomColor();
    }
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}

function clearGrid() {
    const subContainers = document.querySelectorAll(".sub-container");

    subContainers.forEach((item) => {
        container.removeChild(item);
    });
}