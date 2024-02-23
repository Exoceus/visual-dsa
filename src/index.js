import aStar from "./algorithms/aStar.js";
import breadthFirstSearch from "./algorithms/breadthFirstSearch.js";
import dijkstra from "./algorithms/dijkstra.js";

import Canvas from "./canvas/index.js";
import { getCurrentAlgo } from "./dom/algoPicker.js";
import "./dom/index.js";
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
    let algo = getCurrentAlgo();
    if (algo == "breadthFirstSearch") {
        breadthFirstSearch(canvas.state);
    } else if (algo == "aStar") {
        aStar(canvas.state)
    } else if (algo == "dijkstra") {
        dijkstra(canvas.state);
    }
};
