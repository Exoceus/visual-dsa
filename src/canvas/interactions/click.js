import {getCurrentCellType} from "../../input/cellType.js";

export function handleClick(canvas, i, j) {
    console.log(getCurrentCellType());
    let currentCellType = getCurrentCellType();
    canvas.state.setStateData(i, j, {type: currentCellType});
    canvas.state.setStyle(i, j, {background: cellColors[currentCellType]});
}

const cellColors = {
    empty: "black",
    barrier: "white",
    start: "blue",
    end: "red",
};
