export function handleClick(canvas, i, j) {
    // console.log(i, j);
    let element = document.querySelector(`#cell-${i}-${j}`);
    console.log(canvas);
    let {background} = canvas.state.getStyle(i, j);
    canvas.state.setStyle(i, j, {background: "red"});
}
