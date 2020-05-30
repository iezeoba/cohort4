export class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    deposit(amt) {
        let amount = parseFloat(amt);
        if (!this._isPositive(amount)) {
            // console.log(`Deposit: ${this.name} new balance is ${this.balance}`);
            return "Amount entered is negative";
        } else return (this.balance += amount).toFixed(2);
    }
    withdraw(amt) {
        let amount = parseFloat(amt);
        if (this._isAllowed(amount)) {
            this.balance -= amount;
            // console.log(`Withdraw: ${this.name} new balance is ${this.balance}`);
            return (this.balance).toFixed(2);
        } else if (amount < 0) {
            return "Amount is negative"
        } else if (!this._isAllowed(amount)) {
            return "Insufficient balance";
        }
    }
    transfer(amt) { //there is no need for this method as it duplicates the function of the withdraw method 
        let amount = parseFloat(amt);
        if (this._isAllowed(amount)) {
            this.balance -= amount;
            console.log(`Transfer: ${amount} has been moved from ${this.name} to ${this.name}`);
            return (this.balance).toFixed(2);
            // return true;
        } else if (amount < 0) {
            return "Amount is negative"
        } else if (!this._isAllowed(amount)) {
            return "Insufficient balance";
        }
    }
    //     return false;
    // }
    _isPositive(amount) {
        if (amount < 0) {
            return false;
        }
        return true;
    }
    _isAllowed(amount) {
        if (this._isPositive(amount) && this.balance - amount >= 0) {
            return true;
        } else return false;
    }
}
// export class AccountController {
//     constructor(name) {
//         this.name = name;
//     }
    // Add methods
// }
// const account1 = new Account("Ifeanyi Ezeoba", 100);
// export class AccountController {
//     constructor() {
//         this.bankaccounts = [];
//     }
// }
// // export {Account, AccountController};

// const account1 = new Account ("Ifeanyi Ezeoba", 100);
// console.log(account1);

