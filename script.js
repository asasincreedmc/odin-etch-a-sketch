const container = document.querySelector(".container");
const styleGrid = document.createElement("style")
document.head.appendChild(styleGrid)
const styles = styleGrid.sheet
const resetGridBtn = document.querySelector(".reset")
let squaresPerSide = 16;
let allSquares = [];
generateDefaultGrid();


const body = document.querySelector("html")
body.addEventListener("mousedown", () => {
    console.log("down");
    startPainting()
})
body.addEventListener("click", () => {
    console.log("up");
    stopPainting();
})

function paint(e) {
    e.target.style.cssText = 'background: black';
}

function startPainting() {
    allSquares.forEach(square => {
        square.addEventListener("mouseover", paint)
    });
}

function stopPainting() {
    allSquares.forEach(square => {
        square.removeEventListener("mouseover", paint)
    })
}


resetGridBtn.addEventListener("click", () => {
    let input = prompt("Select the number of squares per side: ", 16)
    if (input <= 100 && input > 1) {
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
    allSquares = document.querySelectorAll(".grid")
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
