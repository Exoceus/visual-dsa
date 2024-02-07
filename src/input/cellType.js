const cellTypeInput = document.querySelectorAll("input[name=cellType]");
let currentCellType = "barrier";

cellTypeInput.forEach((radioInput) => {
    radioInput.addEventListener("change", (e) => {
        currentCellType = e.target.value;
    });
});

export function getCurrentCellType() {
    return currentCellType;
}
