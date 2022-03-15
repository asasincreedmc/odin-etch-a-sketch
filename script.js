const container = document.querySelector(".container");
const styleGrid = document.createElement("style")
document.head.appendChild(styleGrid)
const styles = styleGrid.sheet

styles.insertRule(".container { grid-template-columns: repeat(16, 1fr); }");

function generateSquare() {
    const div = document.createElement("div")
    div.classList.add("grid")
    container.appendChild(div)
}

for (let i = 0; i < (16 * 16); i++) {
    generateSquare()
}