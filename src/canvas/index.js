import {applyStyle} from "../utils/style.js";
import {canvasConfig} from "./config.js";
import {handleClick} from "./interactions/click.js";
import {getState} from "./state.js";

export function renderCanvas(canvasElement) {
    let {height, width} = canvasConfig;
    canvasElement.innerHTML = ``;

    for (let i = 0; i < height; i++) {
        let canvasRow = document.createElement("div");
        canvasRow.className = `canvas-row`;
        applyStyle(canvasRow, {display: "flex"});

        for (let j = 0; j < width; j++) {
            let cell = document.createElement("div");
            cell.id = `cell-${i}-${j}`;
            cell.className = `canvas-cell`;
            cell.style = canvasRow.appendChild(cell);
            cell.onclick = function () {
                handleClick(i, j);
            };

            let {backgroundColor} = getState(i, j);

            let cellWidth = 10;

            applyStyle(cell, {height: `${cellWidth}px`, width: `${cellWidth}px`, background: backgroundColor});
        }
        canvasElement.appendChild(canvasRow);
    }
}
