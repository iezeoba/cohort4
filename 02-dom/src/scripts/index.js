// ---------- Basic DOM Section ----------

import domFunctions from "./dom.js";

// idMainDiv.addEventListener("click", () => {
//     idMainDiv.style.backgroundColor = "#add8e6";
//     idStatusBox.textContent = "This is the div";
// });
document.body.addEventListener("click", (e) => {
    console.log("This is the", e.target);
    idStatusBox.textContent = "My message" + " " + idInputItem.value;
});
idShowItem.addEventListener("click", () => {
    let showList = document.getElementsByTagName("ol")[0];
    console.log(showList);
    idStatusBox.textContent = showList;
});
let AddItem = document.getElementById("idAddItem");
let listItems = document.getElementsByTagName("li");

function inputLength() {
    return idInputItem.value.length
};

function addNewItem() {
    let newLi = document.createElement("li");
    let newItem = document.createTextNode(idInputItem.value);
    newLi.appendChild(newItem);
    document.getElementById("idList").appendChild(newLi);
    idInputItem.value = "";

    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Remove"));
    newLi.appendChild(btn);
    btn.onclick = removeParent;
};

function addNewItemOnClick(){
    if (inputLength() > 0) {
        addNewItem();
    }
};

function addNewItemOnKeypress(e) {
    if (inputLength() > 0 && e.key === "Enter") {
        addNewItem();
    }
};

AddItem.addEventListener("click", addNewItemOnClick);
idInputItem.addEventListener("keypress", addNewItemOnKeypress);

function listLength() {
    return listItems.length;
};

// TO CREATE DELETE BUTTONS FOR THE EXISTING LIST ITEMS
let i;
function deleteButton() {
    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Remove"));
    listItems[i].appendChild(btn);
    btn.onclick = removeParent;
};
for (i = 0; i < listLength(); i++) {
    deleteButton();
};

function removeParent(event) {
    event.target.parentNode.remove();
};

// ---------- Working With Cards ----------
console.log(idButton);

let counter = 0;

document.body.addEventListener("click", e => {
    // console.log("You Clicked, at your command");
    // console.log(e.target.textContent);
    // console.log(e.target.nodeName);
    // console.log(e.target);

    if (e.target.nodeName === 'BUTTON') {
        // document.body.appendChild(domfuncs.buildCard("You just added " + counter++));
        console.log(e.target.textContent);
        if (e.target.textContent === "Before") {
            domfuncs.addBefore(e.target.parentElement, "You just added " + counter++);
        }
    }

    // const div = document.createElement("div");
    // div.className = "clCard";
    // div.appendChild(document.createTextNode("This has been inserted"));

    // idStuff2.insertAdjacentElement("afterend", div);

})

console.log(idStuff2);

// let card = new CardManager();
// const btnPrependTo = document.querySelector("#btnPrependTo");
// const btnAppendTo = document.querySelector("#btnAppendTo");
// const btnShow = document.querySelector("#btnShow");
// const btnDelete = document.querySelector("#btnDelete");
// const btnCard = document.getElementById("btnCard");
// const cardContainer = document.querySelector("#card-container");


// const olList = document.querySelector("#olList");


// btnPrependTo.addEventListener("click", function (e) {
//     let pm = new PageManager();
//     let count = olList.children.length + 1;

//     let element = pm.createListElement("Item " + count, "item" + count, "lstItem");
//     pm.prependElement(element, olList);


//     e.preventDefault();
// });

// btnAppendTo.addEventListener("click", function (e) {
//     let pm = new PageManager();
//     let count = olList.children.length + 1;

//     let element = pm.createListElement("Item " + count, "item" + count, "lstItem");
//     pm.appendElement(element, olList);
//     e.preventDefault();

// })

// btnShow.addEventListener("click", function (e) {
//     if (btnShow.value === "Show") {
//         btnShow.value = "Hide"
//         olList.classList.remove("hidden");
//     } else {
//         btnShow.value = "Show";
//         olList.classList.add("hidden");
//     }
//     e.preventDefault();
// })
// btnDelete.addEventListener("click", function (e) {
//     let pm = new PageManager();
//     let li = pm.getLastListItem(olList);
//     pm.deleteListElement(olList, li.dataset.uuid);
//     e.preventDefault();
// });


// olList.addEventListener("click", function (e) {
//     e.target;
//     e.preventDefault();
// })

// btnCard.addEventListener("click", (e) => {
//     cardContainer.appendChild(card.buildCard());
//     e.preventDefault();
// });

