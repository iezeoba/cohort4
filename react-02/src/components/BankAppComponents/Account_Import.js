export class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.allAccounts = [];
    }

    createAccount(name, acctType) {
        let myAccount = {};
        myAccount.name = name;
        myAccount[`${acctType}`] = 0
        this.allAccounts.push(myAccount);
        return myAccount;
    }

    accountNameExists(name) {
        for (let i = 0; i < this.allAccounts.length; i++) {
            if (name === this.allAccounts[i].name) {
                return true
            }
        } return false
    }

    accountTypeExists(type) {
        for (let i = 0; i < this.allAccounts.length; i++) {
            if (Object.keys(this.allAccounts[i]).includes(type) === true) {
                return true
            }
        } return false
    }

    updateAccount(name, acctType) {
        let index = 0;
        for (let i = 0; i < this.allAccounts.length; i++) {
            if (name === this.allAccounts[i].name) {
                index = i
            }
        } this.allAccounts[index][`${acctType}`] = 0
        console.log(this.allAccounts);
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

