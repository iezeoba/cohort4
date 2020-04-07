export class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.allUser = [];
    }
    deposit(acc, amount) {
        this.balance = acc;
        if (!this._isPositive(amount)) {
            // console.log(`Deposit: ${this.name} new balance is ${this.balance}`);
            return "Amount entered is negative";
        } else return this.balance += amount;
    }
    withdraw(acc, amount) {
        this.balance = acc;
        if (this._isAllowed(amount)) {
            this.balance -= amount;
            // console.log(`Withdraw: ${this.name} new balance is ${this.balance}`);
            return this.balance;
        } else if (amount < 0) {
            return "Amount is negative"
        } else if (!this._isAllowed(amount)) {
            return "Insufficient balance";
        }
    }
    transfer() {
        if (this.withdraw(amount) && account.deposit(amount)) {
            console.log(`Transfer: ${amount} has been moved from ${this.name} to ${account.name}`);
            return true;
        }
        return false;
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
export class Accountcontroller {
    constructor(name) {
        this.name = name;
    }

}
