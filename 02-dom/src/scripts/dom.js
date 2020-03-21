// ---------- Basic DOM Section ----------

// idMainDiv.addEventListener("click", () => {
//     idMainDiv.style.backgroundColor = "#add8e6";
//     idMainDiv.style.backgroundColor = "#ffffff";
//     idStatusBox.textContent = "This is the div";
//     console.log("This is the div");
// });
document.body.addEventListener("click", (e) => {
    console.log("This is the", e.target);
    idStatusBox.textContent = "My message" + " " + idInputItem.value;
});
idShowItem.addEventListener("click", () => {
    let showList = document.getElementsByTagName("ol")[0];
    console.log(showList);
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
document.querySelector("#idInputItem").addEventListener("keypress", function (e) {
    if (idInputItem.value.length > 0 && e.key === "Enter") {
    let newLi = document.createElement("li");
    let newItem = document.createTextNode(idInputItem.value);
    newLi.appendChild(newItem);
    // var button = document.createElement("button");
    // button.textContent = "Remove";
    // newLi.appendChild(button);
    // newLi.setAttribute("id","element4");
    // newItem.appendChild(newLi);
    // console.log(newLi.id);
    document.getElementById("idOrderList").appendChild(newLi);
    idInputItem.value = "";
    }
});

// ---------- Working With Cards ----------

