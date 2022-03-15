const container = document.querySelector(".container");
const styles = document.styleSheets.item(0)

styles.insertRule(".container { grid-template-columns: repeat(16, 1fr); }");
styles.insertRule(".container { grid-template-rows: repeat(16, 1fr); }");

function generateSquare() {
    const div = document.createElement("div")
    div.classList.add("grid")
    container.appendChild(div)
}

for (let i = 0; i < (16 * 16); i++) {
    generateSquare()
}