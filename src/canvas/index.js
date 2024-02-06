import {applyStyle} from "../utils/style.js";
import {canvasConfig} from "./config.js";
import {handleClick} from "./interactions/click.js";
import CanvasState from "./state.js";

let clickedDown = false;

export default class Canvas {
    constructor(canvasElement) {
        if (!(canvasElement instanceof Element || canvasElement instanceof Document)) {
            throw "canvasElement needs to be an HTML element";
        }
        this.canvasElement = canvasElement;
        let {height, width} = canvasConfig;
        this.height = height;
        this.width = width;
        this.state = new CanvasState(height, width);
    }

    resetCanvas() {
        this.state = new CanvasState(this.height, this.width);
        this.emptyCanvas();
        this.renderCanvas();
    }

    emptyCanvas() {
        this.canvasElement.innerHTML = "";
    }

    renderCanvas() {
        this.canvasElement.innerHTML = ``;
        this.canvasElement.onmousedown = function () {
            clickedDown = true;
        };
        this.canvasElement.onmouseup = function () {
            clickedDown = false;
        };

        for (let i = 0; i < this.height; i++) {
            let canvasRow = document.createElement("div");
            canvasRow.className = `canvas-row`;
            applyStyle(canvasRow, {display: "flex"});

            for (let j = 0; j < this.width; j++) {
                let cell = document.createElement("div");
                cell.id = `cell-${i}-${j}`;
                cell.className = `canvas-cell`;
                cell.style = canvasRow.appendChild(cell);

                let canvas = this;

                cell.onmouseover = () => {
                    if (clickedDown) {
                        handleClick(canvas, i, j);
                    }
                };
                cell.onclick = () => {
                    handleClick(canvas, i, j);
                };
            }
            this.canvasElement.appendChild(canvasRow);
        }
        this.state.initStyles();
    }
}
