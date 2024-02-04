export function applyStyle(element, styleObj) {
    for (let key in styleObj) {
        element.style[key] = styleObj[key];
    }
}
