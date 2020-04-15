import { Account } from "./account.js"

const myAccount = new Account(acctName.value, 0);
const allUser = []; // Array to hold all the customers
addAcc.addEventListener("click", newAccount);
accountHolders.addEventListener('change', updateDisplay);
makeDeposit.addEventListener('click', makeADeposit);
makeWithdrawal.addEventListener('click', makeAWithdrawal);
let index;


function newAccount() {
    for (let r = 0; r < allUser.length; r++) {          // Loop through all the accounts  
        if (allUser[r].name == acctName.value) {        //check if user exists
            index = r;                                  // if user exist get index in the array
        }
        else index = false;                             // return false if user doesn't exist
    }
    //========= IF NO USER AND NO ACCOUNT, CREATE AN ACCOUNT FOR THE NEW CUSTOMSER ========================== 
    if (allUser.length == 0) {
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
        allUser.push(newUser);                      // PUSH CUSTOMER INTO THE ARRAY
    }
    else if (allUser.length > 0 && allUser[index] == undefined) { //============= THERE ARE ACCOUNTS BUT, CREATE NEW A CUSTOMER ==========================

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
        allUser.push(anotherNewUser);                    // PUSH NEW CUSTOMER INTO THE ARRAY
    }

    else if (allUser[index].name == acctName.value) {   //update account of already existing CUSTOMER
        if ((Object.keys(allUser[index]).includes("CheckingAccount") == true) && (dropdown.value == "Checking Account")) {
            alert('User account already exist');
        } else if ((Object.keys(allUser[index]).includes("CheckingAccount") == false) && (dropdown.value == "Checking Account")) {
            allUser[index].CheckingAccount = 0;
        }
        if ((Object.keys(allUser[index]).includes("SavingsAccount") == true) && (dropdown.value == "Savings Account")) {
            alert('User account already exist');
        } else if ((Object.keys(allUser[index]).includes("SavingsAccount") == false) && (dropdown.value == "Savings Account")) {
            allUser[index].SavingsAccount = 0;
        }
        if ((Object.keys(allUser[index]).includes("CreditCard") == true) && (dropdown.value == "Credit Card")) {
            alert('User account already exist');
        } else if ((Object.keys(allUser[index]).includes("CreditCard") == false) && (dropdown.value == "Credit Card")) {
            allUser[index].CreditCard = 0;
        }
        if ((Object.keys(allUser[index]).includes("RESPAccount") == true) && (dropdown.value == "RESP Account")) {
            alert('User account already exist');
        } else if ((Object.keys(allUser[index]).includes("RESPAccount") == false) && (dropdown.value == "RESP Account")) {
            allUser[index].RESPAccount = 0;
        }
    }
    console.log(allUser);
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
    for (let r = 0; r < allUser.length; r++) {          // Loop through all the accounts  
        if (allUser[r].name == nameOfAccount) {        //check if user exists
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
        if (Object.keys(allUser[cnt]).includes("CheckingAccount")) { // If user has Checking Acc, update display
            checkingAcc.value = allUser[cnt].CheckingAccount;
            totCash += parseFloat(allUser[cnt].CheckingAccount);
            appendAccountOfUser("Checking Account");
        }
        if (Object.keys(allUser[cnt]).includes("SavingsAccount")) { // If user has SavingsAccount, update display
            savingsAcc.value = allUser[cnt].SavingsAccount;
            totCash += parseFloat(allUser[cnt].SavingsAccount);
            appendAccountOfUser("Savings Account");
        }
        if (Object.keys(allUser[cnt]).includes("CreditCard")) { // If user has CreditCard Acc, update display
            creditCard.value = allUser[cnt].CreditCard;
            totCash += parseFloat(allUser[cnt].CreditCard);
            appendAccountOfUser("Credit Card Account");

        }
        if (Object.keys(allUser[cnt]).includes("RESPAccount")) { // If user has RESPAccount Acc, update display
            respAcc.value = allUser[cnt].RESPAccount;
            totCash += parseFloat(allUser[cnt].RESPAccount);
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
            allUser[user].CheckingAccount = myAccount.deposit(allUser[user].CheckingAccount, parseFloat(idAmount.value));

        }
        if (accountOfHolders.value == "Savings Account") {
            allUser[user].SavingsAccount = myAccount.deposit(allUser[user].SavingsAccount, parseFloat(idAmount.value));

        }
        if (accountOfHolders.value == "Credit Card Account") {
            allUser[user].CreditCard = myAccount.deposit(allUser[user].CreditCard, parseFloat(idAmount.value));

        }
        if (accountOfHolders.value == "RESP Account") {
            allUser[user].RESPAccount = myAccount.deposit(allUser[user].RESPAccount, parseFloat(idAmount.value));

        }
    }
    console.log(allUser[user]);
    updateDisplay();
}

function makeAWithdrawal() {
    const user = getAcccountUserIndex(accountHolders.value);    //get the customer indes from array 
    if (user == undefined) {
        alert("Error, please select a user.")
    } else {
        if (accountOfHolders.value == "Checking Account") {
            allUser[user].CheckingAccount = myAccount.withdraw(allUser[user].CheckingAccount, parseFloat(idAmount.value));

        }
        if (accountOfHolders.value == "Savings Account") {
            allUser[user].SavingsAccount = myAccount.withdraw(allUser[user].SavingsAccount, parseFloat(idAmount.value));

        }
        if (accountOfHolders.value == "Credit Card Account") {
            allUser[user].CreditCard = myAccount.withdraw(allUser[user].CreditCard, parseFloat(idAmount.value));

        }
        if (accountOfHolders.value == "RESP Account") {
            allUser[user].RESPAccount = myAccount.withdraw(allUser[user].RESPAccount, parseFloat(idAmount.value));

        }
    }
    console.log(allUser[user]);
    updateDisplay();
}


