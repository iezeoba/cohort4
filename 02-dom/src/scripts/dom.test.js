// npm test -- -t dom

import domFunctions from "./dom.js";

test("Testing the plumbing!", () => {
    console.log("Testing the unit test plumbing!");
});

test("Test that dom functions work", () => {
    console.log("We are in the dom tests");
    const element = domFunctions.buildCard();
    expect(element).toBeTruthy();
});

test("Test that addBefore function works", () => {
    const group = document.createElement("div");
    const element = domFunctions.buildCard("First Insert");
    group.appendChild(element);
    expect(group.children.length).toBe(1);

    const txt = "New Element"
    domFunctions.addBefore(element, txt);
    expect(group.children.length).toBe(2);
    expect(group.children[0].textContent.substr(0, 11)).toBe(txt);
    expect(group.children[1].textContent.substr(0, 12)).toBe("First Insert");
});

test("Test that addAfter function works", () => {
    const group = document.createElement("div");
    const element = domFunctions.buildCard("First Insert");
    group.appendChild(element);

    const second = domFunctions.buildCard("Second");
    element.after(second);

    let node = domFunctions.buildCard("one.one");
    second.before(node);

    console.log(group);
    console.log(group.children[0].textContent);
    console.log(group.children[1].textContent);
    console.log(group.children[2].textContent);
});