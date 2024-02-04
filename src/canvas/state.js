import {canvasConfig} from "./config.js";

let state = [];

initState();

function initState() {
    for (let i = 0; i < canvasConfig.height; i++) {
        let row = [];
        for (let j = 0; j < canvasConfig.width; j++) {
            row.push({backgroundColor: "black"});
        }
        state.push(row);
    }
}

export function getState(row, column) {
    return state[row][column];
}

export function setState(row, column, data) {
    state[row][column] = {...state[row][column], ...data};
    return state[row][column];
}
