const domFunctions = {

    buildCard(text) {
        const div = document.createElement("div");
        div.appendChild(document.createTextNode(text));

        const add = document.createElement("button");
        add.appendChild(document.createTextNode("add"));
        div.appendChild(add);

        const before = document.createElement("button");
        before.appendChild(document.createTextNode("before"));
        div.appendChild(before);

        return div;
    },

    addBefore(node, text) {
        const div = domFunctions.buildCard(text);
        node.parentElement.insertBefore(div, node);
    }
};
export default domFunctions;