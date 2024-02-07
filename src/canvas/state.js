export default class CanvasState {
    constructor(height, width) {
        this.height = height;
        this.width = width;

        this.state = [];
        this.counter = {};

        this.initState();
    }

    initState() {
        for (let i = 0; i < this.height; i++) {
            let row = [];
            for (let j = 0; j < this.width; j++) {
                row.push({
                    style: {
                        background: "black",
                        width: "10px",
                        height: "10px",
                    },
                    data: {
                        type: "empty",
                    },
                });
            }
            this.state.push(row);
        }
    }

    getState(row, column) {
        return this.state[row][column];
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
