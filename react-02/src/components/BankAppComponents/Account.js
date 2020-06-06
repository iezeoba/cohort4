class Account {
    constructor(key, name, acctType, balance) {
        this.key = key
        this.name = name;
        this.acctType = acctType;
        this.balance = balance;
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

class AccountController {
    constructor() {
        this.bankaccounts = [];
        this.counter = 1;
    }

    nextKey() {
        const k = "k" + this.counter;
        this.counter = this.counter + 1;
        return k;
    }

    createAccount(name, acctType, balance) {
        const key = this.nextKey();
        const account = new Account(key, name, acctType, balance);
        this.bankaccounts.push(account)
        return key;
        // let myAccount = {};
        // myAccount.name = name;
        // myAccount[`${acctType}`] = 0
        // this.allAccounts.push(myAccount);
        // return myAccount;
    }

    getAccount(key) {
        for (var i = 0; i < this.bankaccounts.length; i++) {
            if (key === this.bankaccounts[i].key) {
                return this.bankaccounts[i];
            }
        }
    }

    PerformDeposit(key, amt) {
        const SelectedAcct = this.getAccount(key);
        SelectedAcct.deposit(amt);
    }

    PerformWithdraw(key, amt) {
        const SelectedAcct = this.getAccount(key);
        SelectedAcct.withdraw(amt);
    }

    PerformDelete(key, arr) {
        key = this.getAccount(key);
        arr = this.bankaccounts;
        arr.splice(key, 1);
        return arr;
    }
}
export { Account, AccountController };
/*
class AccountController
write the tests
add an account and write test
implement the key
deposit with a key
withdraw with key
delete account with key
*/
