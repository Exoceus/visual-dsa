import {aStar, breadthFirstSearch, dijkstra} from "./algorithms/index.js";

import Canvas from "./canvas/index.js";
import {getCurrentAlgo} from "./dom/algoPicker.js";
import {getAlgoStatus, setAlgoStatus, stopAlgo} from "./dom/algoStatus.js";
import "./dom/index.js";
import "./input/cellType.js";

const canvasElement = document.querySelector("#canvas");
const resetButton = document.querySelector("#reset-btn");
const startButton = document.querySelector("#start-btn");
const randomBarrierButton = document.querySelector("#random-barrier-btn");

let canvas = new Canvas(canvasElement);
canvas.renderCanvas();

resetButton.onclick = async function () {
    await stopAlgo();
    canvas.resetCanvas();
};

startButton.onclick = function () {
    if (getAlgoStatus() != "stopped") {
        return;
    }

    let algo = getCurrentAlgo();
    setAlgoStatus("started");
    if (algo == "breadthFirstSearch") {
        breadthFirstSearch(canvas.state);
    } else if (algo == "aStar") {
        aStar(canvas.state);
    } else if (algo == "dijkstra") {
        dijkstra(canvas.state);
    }
};

randomBarrierButton.onclick = function () {
    canvas.state.setRandomBarriers();
};
