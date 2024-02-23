let currentAlgo;

export function algoPicker(root) {
    let algorithms = ["breadthFirstSearch", "aStar", "dijkstra"];

    let wrapper = document.createElement("div");

    algorithms.forEach((algo, index) => {
        let algoInput = document.createElement("input");
        algoInput.type = "radio";
        algoInput.id = algo;
        algoInput.name = "algoPick";
        algoInput.value = algo;

        algoInput.addEventListener("change", (e) => {
            currentAlgo = e.target.value;
        });

        let algoLabel = document.createElement("label");
        algoLabel.for = algo;
        algoLabel.innerText = `${camel2title(algo)}`;

        if (index == 0) {
            algoInput.checked = true;
            currentAlgo = algo;
        }

        wrapper.appendChild(algoInput);
        wrapper.appendChild(algoLabel);
    });

    root.appendChild(wrapper);
}

export function getCurrentAlgo() {
    return currentAlgo;
}

const camel2title = (camelCase) =>
    camelCase
        .replace(/([A-Z])/g, (match) => ` ${match}`)
        .replace(/^./, (match) => match.toUpperCase())
        .trim();
