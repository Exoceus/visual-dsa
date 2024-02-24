const cellTypeInput = document.querySelectorAll("input[name=cellType]");
let currentCellType = "start";

cellTypeInput.forEach((radioInput) => {
    radioInput.addEventListener("change", (e) => {
        currentCellType = e.target.value;
    });
});

export function getCurrentCellType() {
    return currentCellType;
}
