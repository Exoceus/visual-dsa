export default class CanvasState {
    constructor(height, width) {
        this.height = height;
        this.width = width;

        this.state = [];

        this.initState();
    }

    initState() {
        let windowWidth = window.innerWidth;
        let pixelLength = Math.floor(windowWidth / this.width);
        console.log();
        for (let i = 0; i < this.height; i++) {
            let row = [];
            for (let j = 0; j < this.width; j++) {
                row.push({
                    style: {
                        background: "black",
                        width: `${pixelLength}px`,
                        height: `${pixelLength}px`,
                    },
                    data: {},
                });
            }
            this.state.push(row);
        }
    }

    getStateData(row, column) {
        return this.state[row][column].data;
    }

    setStateData(row, column, data) {
        this.state[row][column].data = {...this.getStateData(row, column), ...data};
        return this.getStateData(row, column);
    }

    getStyle(row, column) {
        return this.state[row][column].style;
    }

    setStyle(row, column, styles) {
        this.state[row][column].style = {...this.getStyle(row, column), ...styles};
        this.applyStyle(row, column);
        return this.getStyle(row, column);
    }

    initStyles() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                this.applyStyle(i, j);
            }
        }
    }

    applyStyle(row, column) {
        let element = document.querySelector(`#cell-${row}-${column}`);
        let styleObj = this.getStyle(row, column);

        for (let key in styleObj) {
            element.style[key] = styleObj[key];
        }
    }
}
