import { Account } from "./account.js"

const myAccount = new Account(acctName.value, 0);
let newUser = {};
addAcc.addEventListener("click", newAccount);

function newAccount() {
    console.log("testing new acct");
    console.log(Object.keys(newUser));
    // ---------- USER DOES NOT EXIST AND HAS NO ACCOUNT ----------
    if (Object.keys(newUser).includes("name") == false) {
        if (dropdown.value == "Checking Account") {
            newUser.name = acctName.value;
            newUser.CheckingAccount = 0;
        } else if (dropdown.value == "Savings Account") {
            newUser.name = acctName.value;
            newUser.SavingsAccount = 0;
        } else if (dropdown.value == "Credit Card") {
            newUser.name = acctName.value;
            newUser.CreditCard = 0;
        } else if (dropdown.value == "RESP Account") {
            newUser.name = acctName.value;
            newUser.RESPAccount = 0;
        } else {
            newUser.name = acctName.value;
            newUser[`${dropdown.lastChild.value}`] = 0; // newUser
        }
        // ---------- USER EXISTS AND HAS AN ACCOUNT ---------- 
    } else if (Object.keys(newUser).includes("name") && (newUser.name == acctName.value)) {
        if ((Object.keys(newUser).includes("CheckingAccount") == true) && (dropdown.value == "Checking Account")) {
            alert("User account already exists");
        } else if ((Object.keys(newUser).includes("CheckingAccount") == false) && (dropdown.value == "Checking Account")) {
            newUser.CheckingAccount = 0;
        }
        if ((Object.keys(newUser).includes("SavingsAccount") == true) && (dropdown.value == "Savings Account")) {
            alert("User account already exists");
        } else if ((Object.keys(newUser).includes("SavingsAccount") == false) && (dropdown.value == "Savings Account")) {
            newUser.SavingsAccount = 0;
        }
        if ((Object.keys(newUser).includes("CreditCard") == true) && (dropdown.value == "Credit Card")) {
            alert("User account already exists");
        } else if ((Object.keys(newUser).includes("CreditCard") == false) && (dropdown.value == "Credit Card")) {
            newUser.CreditCard = 0;
        }
        if ((Object.keys(newUser).includes("RESPAccount") == true) && (dropdown.value == "RESP Account")) {
            alert("User account already exists");
        } else if ((Object.keys(newUser).includes("RESPAccount") == false) && (dropdown.value == "RESP Account")) {
            newUser.RESPAccount = 0;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    if (Object.keys(newUser).includes("CheckingAccount")) {
        checkingAcc.value = newUser.CheckingAccount;
    }
    else if (Object.keys(newUser).includes("SavingsAccount")) {
        savingsAcc.value = newUser.SavingsAccount;
    }
    else if (Object.keys(newUser).includes("CreditCard")) {
        creditCard.value = newUser.CreditCard;
    }
    else if (Object.keys(newUser).includes("RESPAccount")) {
        respAcc.value = newUser.RESPAccount;
    }
}

document.getElementById("addCustAcc").addEventListener("click", insertValue);

function insertValue() {
    if (idCustAcc.value.length > 0) {
        let txtAccType = document.getElementById("idCustAcc").value;
        let newOption = document.createElement("OPTION");
        let newOptionVal = document.createTextNode(txtAccType);

        newOption.appendChild(newOptionVal);
        dropdown.appendChild(newOption);
        idCustAcc.value = "";
        // newUser = Object.assign(txtAccType,newUser); // object key
    }
}
idDeposit.addEventListener("click", depositCash);

function depositCash(amount) {
    if (dropdownTrxn.value == "Checking Account") {
        checkingAcc.value = myAccount.deposit(idAmount.value);
    } else if (dropdownTrxn.value == "Savings Account") {
        savingsAcc.value = myAccount.deposit(idAmount.value);
    } else if (dropdownTrxn.value == "Credit Card") {
        creditCard.value = myAccount.deposit(idAmount.value);
    } else if (dropdownTrxn.value == "RESP Account") {
        respAcc.value = myAccount.deposit(idAmount.value);
    }
};