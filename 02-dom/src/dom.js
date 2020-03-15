// Basic DOM Section
// idMainDiv.addEventListener("click", () => {
//     idMainDiv.style.backgroundColor = "#add8e6";
//     idMainDiv.style.backgroundColor = "#ffffff";
//     idStatusBox.textContent = "This is the div";
//     console.log("This is the div");
// });
// idH1element.addEventListener("click", () => {
//     idStatusBox.textContent = "This is the h1 element - Header";
//     console.log("This is the h1 element - Header")
// });
// idParagraph.addEventListener("click", () => {
//     idStatusBox.textContent = "This is the paragraph element";
//     console.log("This is the paragraph element")
// });
// idOrderList.addEventListener("click", () => {
//     idStatusBox.textContent = "This is the ordered list element";
//     console.log("This is the ordered list element")
// });
document.body.addEventListener("click", (e) => {
    console.log("This is the", e.target);
    idStatusBox.textContent = "My message" + " " + idInputItem.value;
});
// console.log(e.target.textContent);
idShowItem.addEventListener("click", () => {
    var list = document.body.children[1].children;
    console.log(list);
    // let showChildren = document.li.children;
    // let note = "";
    // let i;
    // for (i = 0; i < showChildren.length; i++) {
    //     note = note + showChildren[i].tagName + "<br>";
    // }
    // document.getElementById("idOrderList").innerHTML = note;
});
idAddItem.addEventListener("click", () => {
    if (idInputItem.value.length > 0) {
    let newLi = document.createElement("li");
    let newItem = document.createTextNode(idInputItem.value);
    newLi.appendChild(newItem);
    document.getElementById("idOrderList").appendChild(newLi);
    idInputItem.value = "";
    }
});
idAddItem.addEventListener("keypress", () => {
    if (idInputItem.value.length > 0 && event.KeyCode === 13) {
    let newLi = document.createElement("li");
    let newItem = document.createTextNode(idInputItem.value);
    newLi.appendChild(newItem);
    document.getElementById("idOrderList").appendChild(newLi);
    idInputItem.value = "";
    }
});

// Working With Cards

