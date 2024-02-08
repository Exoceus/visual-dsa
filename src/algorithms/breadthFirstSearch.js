export default async function breadthFirstSearch(pathfindingState) {
    let start = pathfindingState.getStartCell();
    let end = pathfindingState.getEndCell();

    let queue = [start];
    let path = {};

    let endReached = false;

    while (queue.length > 0) {
        let curr = queue.shift();

        let neighbours = getNeighours(curr, pathfindingState);
        neighbours.forEach((cell) => {
            let {row, column} = cell;
            if (pathfindingState.getCellType(row, column) == "empty") {
                pathfindingState.setCellType(row, column, "visited");
                queue.push({row, column});
                path[`${row}-${column}`] = `${curr.row}-${curr.column}`;
            }
            if (pathfindingState.getCellType(row, column) == "end") {
                endReached = true;
                path[`${row}-${column}`] = `${curr.row}-${curr.column}`;
            }
        });

        if (endReached) {
            showPath(pathfindingState, path, `${end.row}-${end.column}`, `${start.row}-${start.column}`);
            break;
        }

        await new Promise((r) => setTimeout(r, 10));
    }
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
