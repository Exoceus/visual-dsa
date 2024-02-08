import breadthFirstSearch from "./algorithms/breadthFirstSearch.js";
import Canvas from "./canvas/index.js";
import "./input/cellType.js";

const canvasElement = document.querySelector("#canvas");
const resetButton = document.querySelector("#reset-btn");
const startButton = document.querySelector("#start-btn");

let canvas = new Canvas(canvasElement);
canvas.renderCanvas();

resetButton.onclick = function () {
    canvas.resetCanvas();
};

startButton.onclick = function () {
    breadthFirstSearch(canvas.state);
};
