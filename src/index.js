import Canvas from "./canvas/index.js";
import "./input/cellType.js";

const canvasElement = document.querySelector("#canvas");
const resetButton = document.querySelector("#reset-btn");

let canvas = new Canvas(canvasElement);
canvas.renderCanvas();

resetButton.onclick = function () {
    canvas.resetCanvas();
};
