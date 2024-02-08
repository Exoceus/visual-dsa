import {getCurrentCellType} from "../../input/cellType.js";

export function handleClick(canvas, row, column) {
    canvas.state.setCellType(row, column, getCurrentCellType());
}