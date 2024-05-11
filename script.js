let input = 0;
const container = document.querySelector(".container");

setGrid(16);
// clearGrid();
changeColor();

const btn = document.querySelector(".change-grid");
btn.addEventListener("click", (event) => {

    input = prompt("Enter num(0-100): ", "");
    if (input > 0 && input <= 100) {
        clearGrid();
        setGrid(input);
    } else {
        alert("Given value was out of range; So no change in defaults!");
    }

    changeColor();
})

function setGrid(size) {
    for (let i = 0; i < size; i++) {
        const parentDiv = document.createElement("div");
        parentDiv.classList.add("sub-container");
        parentDiv.setAttribute("style", "flex: auto; display: flex; height: 60px;");
    
        container.appendChild(parentDiv);
        for (let j = 0; j < size; j++) {
            const childDiv = document.createElement("div");
            childDiv.setAttribute("style", "flex: auto; width: 60px;");
            childDiv.classList.add("red");
    
            parentDiv.appendChild(childDiv);
        }
    }
}

function changeColor() {
    const reds = document.querySelectorAll(".red");
    reds.forEach((red) => {
        red.addEventListener("mouseover", (event) => {
            red.setAttribute("style", "flex: auto; width: 60px; background-color: red;");
        });
    });
}

// Add a function to remove the old grid
function clearGrid() {
    const subContainers = document.querySelectorAll(".sub-container");
    // const allRedDivs = document.querySelectorAll(".red");
    // subContainers.forEach((subContainer) => {
    //     allRedDivs.forEach((redDiv) => {
    //         subContainer.removeChild(redDiv);
    //     });

    //     container.removeChild(subContainer);
    // });

    // for (let i = 0; i < subContainers.length; i++) {
    //     let item = subContainers[i];

        // const allRedDivs = document.querySelectorAll(".red");

        // while (item.firstChild) {
        //     item.removeChild(item.firstChild);
        // }

        // container.removeChild(item);

        // for (let j = 0; j < allRedDivs.length - 1; j++) {
        //     let redDiv = allRedDivs[j];

        //     item.removeChild(redDiv);
        // }

        // container.removeChild(item);
    // }

        subContainers.forEach((item) => {
            container.removeChild(item);
        });
}