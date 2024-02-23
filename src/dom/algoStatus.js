let algoStatus = "stopped";

export function breakAlgo() {
    return algoStatus == "stopping" ? true : false;
}

export function setAlgoStatus(status) {
    algoStatus = status;
}

export async function stopAlgo() {
    if (algoStatus != "started") {
        return;
    }
    setAlgoStatus("stopping");

    while (algoStatus != "stopped") {
        await new Promise((r) => setTimeout(r, 10));
        return;
    }
}

export function getAlgoStatus(){
    return algoStatus;
}

export function startAlgo() {
    setAlgoStatus("started");
}
