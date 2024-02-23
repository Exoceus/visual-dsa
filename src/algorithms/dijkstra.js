import {breakAlgo, setAlgoStatus} from "../dom/algoStatus.js";

export async function dijkstra(pathfindingState) {
    let start = pathfindingState.getStartCell();
    let end = pathfindingState.getEndCell();

    let queue = [];
    let path = {};

    let endReached = false;

    queue.push({...start, distance: 0});

    while (queue.length > 0) {
        let curr = shiftMinDistCell(queue);

        if (breakAlgo()) {
            setAlgoStatus("stopped");
            break;
        }

        let neighbours = getNeighours({row: curr.row, column: curr.column}, pathfindingState);

        for (let cell of neighbours) {
            let {row, column} = cell;
            if (pathfindingState.getCellType(row, column) == "empty") {
                pathfindingState.setCellType(row, column, "visited");
                queue.push({row, column, distance: curr.distance + 1});
                path[`${row}-${column}`] = `${curr.row}-${curr.column}`;
            }
            if (pathfindingState.getCellType(row, column) == "end") {
                endReached = true;
                path[`${row}-${column}`] = `${curr.row}-${curr.column}`;
            }
            await new Promise((r) => setTimeout(r, 1));
        }

        if (endReached) {
            showPath(pathfindingState, path, `${end.row}-${end.column}`, `${start.row}-${start.column}`);
            break;
        }
    }

    setAlgoStatus("stopped");
}

function shiftMinDistCell(queue) {
    let minDistanceCell = null;
    let targetIndex = -1;

    for (let i = 0; i < queue.length; i++) {
        if (minDistanceCell == null || minDistanceCell.distance > queue[i].distance) {
            minDistanceCell = queue[i];
            targetIndex = i;
        }
    }

    queue.splice(targetIndex, 1);

    return minDistanceCell;
}

function showPath(pathfindingState, path, endPoint, startPoint) {
    let curr = endPoint;
    curr = path[curr];
    while (curr != startPoint) {
        let coords = curr.split("-");
        pathfindingState.setCellType(coords[0], coords[1], "path");
        curr = path[curr];
    }
}

function getNeighours({row, column}, pathfindingState) {
    let neighbours = [];
    if (row > 0) {
        neighbours.push({row: row - 1, column});
    }
    if (row < pathfindingState.height - 1) {
        neighbours.push({row: row + 1, column});
    }
    if (column > 0) {
        neighbours.push({row, column: column - 1});
    }
    if (column < pathfindingState.width - 1) {
        neighbours.push({row, column: column + 1});
    }
    return neighbours;
}
