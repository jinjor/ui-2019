export function html(array, ...args) {
    let s = "";
    for (let i = 0; i < array.length; i++) {
        s += array[i] + argToString(args[i]);
    }
    return s;
}
function argToString(arg) {
    if (arg === undefined || arg === null) {
        return "";
    }
    if (typeof arg === "string") {
        return arg.replace(/[&'`"<>]/g, function (match) {
            return {
                "&": "&amp;",
                "'": "&#x27;",
                "`": "&#x60;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;"
            }[match];
        });
    }
    return String(arg);
}
//# sourceMappingURL=html.js.map