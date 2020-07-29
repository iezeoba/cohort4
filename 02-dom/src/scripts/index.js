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
    btn.onclick = removeParent; //Here I'm assigning the removeParent function defined later below
};

function addNewItemOnClick() {
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

// ---------- Working With Cards ---------------------------
let counter = 0;

// function incrementCounter() {    //This block of code wasn't used //
//     return counter++;
// }

let addCard = document.getElementById("idAddCard");

addCard.addEventListener("click", callNewCardAndIncrementCounter);

function newCard() {
    let newDiv = document.createElement("div");
    newDiv.appendChild(document.createTextNode(`Card ${++counter}`)); //Or newDiv.appendChild(document.createTextNode("Card" + " " + counter)); 

    let lineBreak = document.createElement("br"); //To create linebreak between the textnode 'Card 1' and the <button> elements on the next line //
    newDiv.appendChild(lineBreak);

    document.getElementById("idInnerDiv").appendChild(newDiv);

    newDiv.id = "idDivCard";
    newDiv.classList.add("clDivCard");
    // ----------------------------------------------------------------- //Separating newly created elements //
    let btnAddBefore = document.createElement("button");
    btnAddBefore.appendChild(document.createTextNode("Add Before"));
    newDiv.appendChild(btnAddBefore);

    btnAddBefore.onclick = function (e) {        //Using inline method to add eventlistener. Inline can also be used on the source element in the html file //
        let newNode = newCard();
        let innerDiv = document.getElementById("idInnerDiv")
        innerDiv.insertBefore(newNode, e.target.parentNode)
    }

    btnAddBefore.id = "idAddBeforeBtn";
    btnAddBefore.classList.add("clAddBeforeAfterBtn")
    // --------------------------------------------------------------- //Separating newly created elements //
    let btnAddAfter = document.createElement("button");
    btnAddAfter.appendChild(document.createTextNode("Add After"));
    newDiv.appendChild(btnAddAfter);

    btnAddAfter.onclick = function (e) {
        let newNode = newCard();
        let innerDiv = document.getElementById("idInnerDiv")
        innerDiv.insertBefore(newNode, e.target.parentNode.nextSibling)
    }

    btnAddAfter.id = "idAddAfterBtn";
    btnAddAfter.classList.add("clAddBeforeAfterBtn")
    // -------------------------------------------------------------- //Separating newly created elements //
    let btnDelete = document.createElement("button");
    btnDelete.appendChild(document.createTextNode("Delete"));
    newDiv.appendChild(btnDelete);
    btnDelete.onclick = removeParent;
    console.log("adding new div");

    btnDelete.id = "idDeleteBtn";
    btnDelete.classList.add("clDeleteBtn");
    return newDiv;
};


function callNewCardAndIncrementCounter() {     //Calling the two functions defined above //
    newCard();
    //incrementCounter();
}



// Larry's Presentation ------------------------------------
// let counter = 0;

// document.body.addEventListener("click", e => {
//     // console.log("You Clicked, at your command");
//     // console.log(e.target.textContent);
//     // console.log(e.target.nodeName);
//     // console.log(e.target);

//     if (e.target.nodeName === 'BUTTON') {
//         // document.body.appendChild(domfuncs.buildCard("You just added " + counter++));
//         console.log(e.target.textContent);
//         if (e.target.textContent === "Before") {
//             domfuncs.addBefore(e.target.parentElement, "You just added " + counter++);
//         }
//     }

//     // const div = document.createElement("div");
//     // div.className = "clCard";
//     // div.appendChild(document.createTextNode("This has been inserted"));

//     // idStuff2.insertAdjacentElement("afterend", div);

// })
// console.log(idStuff2);