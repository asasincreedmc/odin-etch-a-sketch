const container = document.querySelector(".container");
const styleGrid = document.createElement("style")
document.head.appendChild(styleGrid)
const styles = styleGrid.sheet
const resetGridBtn = document.querySelector(".reset")
let squaresPerSide = 16;
generateDefaultGrid();

resetGridBtn.addEventListener("click", () => {
    let input = prompt("Select the number of squares per side: ", 16)
    if (input <= 100 && input > 0) {
        eraseGrid();
        generateGrid(input);
        reziseGrid(input);
    } else if (input > 100) {
        alert("That number is too big (Max 100)");
    } else alert("Please enter a valid number");

}
)

function generateSquare() {
    const div = document.createElement("div")
    div.classList.add("grid")
    container.appendChild(div)
}

function generateGrid(sideSize) {
    for (let i = 0; i < (sideSize * sideSize); i++) {
        generateSquare()
    }
}

function eraseGrid() {
    let divs = document.querySelectorAll(".grid")
    for (div of divs) {
        container.removeChild(div)
    }
}

function reziseGrid(sideSize) {
    styles.deleteRule(0)
    styles.insertRule(`.container { grid-template-columns: repeat(${sideSize}, 1fr); }`, 0);
    squaresPerSide = sideSize
}

function generateDefaultGrid() {
    generateGrid(16)
    styles.insertRule(".container { grid-template-columns: repeat(16, 1fr); }", 0);
}
