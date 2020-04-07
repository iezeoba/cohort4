import { Account } from "./account_multiuser.js"

const myAcount = new Account(acctName.value, 0);
// const allUser = []; // Array to hold all the customers
addAcc.addEventListener("click", newAccount);
accountHolders.addEventListener('change', updateDisplay);
makeDeposit.addEventListener('click', makeADeposit);
makeWithdrawal.addEventListener('click', makeAWithdrawal);
let index;


function newAccount() {
    for (let r = 0; r < myAcount.allUser.length; r++) {          // Loop through all the accounts  
        if (myAcount.allUser[r].name == acctName.value) {        //check if user exists
            index = r;                                  // if user exist get index in the array
        }
        else index = false;                             // return false if user doesn't exist
    }
    //========= IF NO USER AND NO ACCOUNT, CREATE AN ACCOUNT FOR THE NEW CUSTOMSER ========================== 
    if (myAcount.allUser.length == 0) {
        let newUser = {};
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
        }
        appendUser(newUser.name); //or appendUser(acctName.value); 
        myAcount.allUser.push(newUser);                      // PUSH CUSTOMER INTO THE ARRAY
    }
    else if (myAcount.allUser.length > 0 && myAcount.allUser[index] == undefined) { //============= THERE ARE ACCOUNTS BUT, CREATE NEW A CUSTOMER ==========================

        let anotherNewUser = {};
        if (dropdown.value == "Checking Account") {
            anotherNewUser.name = acctName.value;
            anotherNewUser.CheckingAccount = 0;
        } else if (dropdown.value == "Savings Account") {
            anotherNewUser.name = acctName.value;
            anotherNewUser.SavingsAccount = 0;
        } else if (dropdown.value == "Credit Card") {
            anotherNewUser.name = acctName.value;
            anotherNewUser.CreditCard = 0;
        } else if (dropdown.value == "RESP Account") {
            anotherNewUser.name = acctName.value;
            anotherNewUser.RESPAccount = 0;
        }
        appendUser(anotherNewUser.name); //or appendUser(acctName.value); 
        myAcount.allUser.push(anotherNewUser);                    // PUSH NEW CUSTOMER INTO THE ARRAY
    }

    else if (myAcount.allUser[index].name == acctName.value) {   //update account of already existing CUSTOMER
        if ((Object.keys(myAcount.allUser[index]).includes("CheckingAccount") == true) && (dropdown.value == "Checking Account")) {
            alert('User account already exist');
        } else if ((Object.keys(myAcount.allUser[index]).includes("CheckingAccount") == false) && (dropdown.value == "Checking Account")) {
            myAcount.allUser[index].CheckingAccount = 0;
        }
        if ((Object.keys(myAcount.allUser[index]).includes("SavingsAccount") == true) && (dropdown.value == "Savings Account")) {
            alert('User account already exist');
        } else if ((Object.keys(myAcount.allUser[index]).includes("SavingsAccount") == false) && (dropdown.value == "Savings Account")) {
            myAcount.allUser[index].SavingsAccount = 0;
        }
        if ((Object.keys(myAcount.allUser[index]).includes("CreditCard") == true) && (dropdown.value == "Credit Card")) {
            alert('User account already exist');
        } else if ((Object.keys(myAcount.allUser[index]).includes("CreditCard") == false) && (dropdown.value == "Credit Card")) {
            myAcount.allUser[index].CreditCard = 0;
        }
        if ((Object.keys(myAcount.allUser[index]).includes("RESPAccount") == true) && (dropdown.value == "RESP Account")) {
            alert('User account already exist');
        } else if ((Object.keys(myAcount.allUser[index]).includes("RESPAccount") == false) && (dropdown.value == "RESP Account")) {
            myAcount.allUser[index].RESPAccount = 0;
        }
    }
    // console.log(myAcount.allUser);
}

function appendUser(nam) {                              //update dropdown with all the customers 
    let newCust = document.createElement('option');     //create a new child option    
    let optionText = document.createTextNode(nam);      //create new text for the child option - nam=the name of the customer
    newCust.appendChild(optionText);                    //Attach text to the child option
    newCust.id = `user-${nam}`;                         //assign an id incase we want to delete the customer from our database
    accountHolders.appendChild(newCust);               // attach the customer to the dropdown

}

function appendAccountOfUser(nam) {
    let newAc = document.createElement('option');
    let optionText = document.createTextNode(nam);
    newAc.appendChild(optionText);
    newAc.id = `acc-${nam}`;
    accountOfHolders.appendChild(newAc);
}

function getAcccountUserIndex(nameOfAccount) {
    let ind;
    for (let r = 0; r < myAcount.allUser.length; r++) {          // Loop through all the accounts  
        if (myAcount.allUser[r].name == nameOfAccount) {        //check if user exists
            ind = r;                                  // if user exist get index in the array
        }
    }
    return ind;
}

function updateDisplay() {
    let accDropDown = accountOfHolders.firstElementChild;
    if (accountHolders.value == "----Select----") {
        //========Clear All fields of display========================
        checkingAcc.value = "";
        savingsAcc.value = "";
        creditCard.value = "";
        respAcc.value = "";
        totBal.value = "";
        while (accDropDown) {
            accDropDown.remove();
            accDropDown = accountOfHolders.firstElementChild;
        }
    }
    else if (accountHolders.value != "----Select----") {
        //========Clear All fields of display========================
        checkingAcc.value = "";
        savingsAcc.value = "";
        creditCard.value = "";
        respAcc.value = "";
        totBal.value = "";

        while (accDropDown) {
            accDropDown.remove();
            accDropDown = accountOfHolders.firstElementChild;
        }
        //====================================
        appendAccountOfUser("--Select--");

        const cnt = getAcccountUserIndex(accountHolders.value) //get the customer indes from array 
        let totCash = 0;                                        // Initialize total cash balance
        if (Object.keys(myAcount.allUser[cnt]).includes("CheckingAccount")) { // If user has Checking Acc, update display
            checkingAcc.value = myAcount.allUser[cnt].CheckingAccount;
            totCash += parseFloat(myAcount.allUser[cnt].CheckingAccount);
            appendAccountOfUser("Checking Account");
        }
        if (Object.keys(myAcount.allUser[cnt]).includes("SavingsAccount")) { // If user has SavingsAccount, update display
            savingsAcc.value = myAcount.allUser[cnt].SavingsAccount;
            totCash += parseFloat(myAcount.allUser[cnt].SavingsAccount);
            appendAccountOfUser("Savings Account");
        }
        if (Object.keys(myAcount.allUser[cnt]).includes("CreditCard")) { // If user has CreditCard Acc, update display
            creditCard.value = myAcount.allUser[cnt].CreditCard;
            totCash += parseFloat(myAcount.allUser[cnt].CreditCard);
            appendAccountOfUser("Credit Card Account");

        }
        if (Object.keys(myAcount.allUser[cnt]).includes("RESPAccount")) { // If user has RESPAccount Acc, update display
            respAcc.value = myAcount.allUser[cnt].RESPAccount;
            totCash += parseFloat(myAcount.allUser[cnt].RESPAccount);
            appendAccountOfUser("RESP Account")
        }

        totBal.value = totCash; // display total balance
    }

}

function makeADeposit() {
    const user = getAcccountUserIndex(accountHolders.value);    //get the customer indes from array 
    if (user == undefined) {
        alert("Error, please select a user.")
    } else {
        if (accountOfHolders.value == "Checking Account") {
            myAcount.allUser[user].CheckingAccount = myAcount.deposit(myAcount.allUser[user].CheckingAccount, parseFloat(idAmount.value));

        }
        if (accountOfHolders.value == "Savings Account") {
            myAcount.allUser[user].SavingsAccount = myAcount.deposit(myAcount.allUser[user].SavingsAccount, parseFloat(idAmount.value));

        }
        if (accountOfHolders.value == "Credit Card Account") {
            myAcount.allUser[user].CreditCard = myAcount.deposit(myAcount.allUser[user].CreditCard, parseFloat(idAmount.value));

        }
        if (accountOfHolders.value == "RESP Account") {
            myAcount.allUser[user].RESPAccount = myAcount.deposit(myAcount.allUser[user].RESPAccount, parseFloat(idAmount.value));

        }
    }
    console.log(myAcount.allUser[user]);
    updateDisplay();
}

function makeAWithdrawal() {
    const user = getAcccountUserIndex(accountHolders.value);    //get the customer indes from array 
    if (user == undefined) {
        alert("Error, please select a user.")
    } else {
        if (accountOfHolders.value == "Checking Account") {
            myAcount.allUser[user].CheckingAccount = myAcount.withdraw(myAcount.allUser[user].CheckingAccount, parseFloat(idAmount.value));

        }
        if (accountOfHolders.value == "Savings Account") {
            myAcount.allUser[user].SavingsAccount = myAcount.withdraw(myAcount.allUser[user].SavingsAccount, parseFloat(idAmount.value));

        }
        if (accountOfHolders.value == "Credit Card Account") {
            myAcount.allUser[user].CreditCard = myAcount.withdraw(myAcount.allUser[user].CreditCard, parseFloat(idAmount.value));

        }
        if (accountOfHolders.value == "RESP Account") {
            myAcount.allUser[user].RESPAccount = myAcount.withdraw(myAcount.allUser[user].RESPAccount, parseFloat(idAmount.value));

        }
    }
    console.log(myAcount.allUser[user]);
    updateDisplay();
}

