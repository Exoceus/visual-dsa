import {applyStyle} from "../../utils/style.js";
import {getState, setState} from "../state.js";

export function handleClick(i, j) {
    // console.log(i, j);
    let element = document.querySelector(`#cell-${i}-${j}`);
    let {backgroundColor} = getState(i, j);
    let newColor = backgroundColor == "red" ? "black" : "red";
    setState(i, j, {backgroundColor: newColor});
    applyStyle(element, {background: newColor});
}
