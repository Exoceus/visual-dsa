import CanvasState from "./index.js";

export default class PathfindingState extends CanvasState {
    constructor(height, width) {
        super(height, width);

        this.startCell = null;
        this.endCell = null;

        this.initCellTypes();
    }

    cellColors = {
        empty: "black",
        barrier: "white",
        start: "yellow",
        end: "red",
    };

    initCellTypes() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                this.setStateData(i, j, {type: "empty"});
            }
        }
    }

    setCellType(row, column, cellType) {
        if (cellType == "start") {
            if (this.startCell) {
                this.setCellType(this.startCell.row, this.startCell.column, "empty");
            }
            this.startCell = {row, column};
        } else if (cellType == "end") {
            if (this.endCell) {
                this.setCellType(this.endCell.row, this.endCell.column, "empty");
            }
            this.endCell = {row, column};
        }

        this.setStateData(row, column, {type: cellType});
        this.setStyle(row, column, {background: this.cellColors[cellType]});
    }
}