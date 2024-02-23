export default async function aStar(pathfindingState) {
    let start = pathfindingState.getStartCell();
    let end = pathfindingState.getEndCell();

    let queue = [];
    let path = {};

    let endReached = false;

    queue.push({...start, distance: 0});

    while (queue.length > 0) {
        let curr = shiftMinDistCell(queue, end);
        console.log(curr);

        let neighbours = getNeighours({row: curr.row, column: curr.column}, pathfindingState);

        for (let cell of neighbours) {
            let {row, column} = cell;
            if (pathfindingState.getCellType(row, column) == "empty") {
                pathfindingState.setCellType(row, column, "visited");
                queue.push({row, column, distance: euclideanDistance(cell, end)});
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
}

function euclideanDistance(a, b) {
    return Math.sqrt((a.row - b.row) ** 2 + (a.column - b.column) ** 2);
}

function shiftMinDistCell(queue, end) {
    let minDistanceCell = null;
    let targetIndex = -1;

    for (let i = 0; i < queue.length; i++) {
        if (minDistanceCell == null || minDistanceCell.distance > euclideanDistance(queue[i], end)) {
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
