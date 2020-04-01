function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

deposit(amount) {
  if (this._isPositive(amount)) {
    this.balance += amount;
    console.info(`Deposit: ${this.name} new balance is ${this.balance}`);
    return true;
  }
  return false;
}

withdraw(amount) {
  if (this._isAllowed(amount)) {
    this.balance -= amount;
    console.info(`Withdraw: ${this.name} new balance is ${this.balance}`);
    return true;
  }
  return false;
}

transfer(amount, account) {
  if (this.withdraw(amount) && account.deposit(amount)) {
    console.info(`Transfer: ${amount} has been moved from ${this.name} to ${account.name}`);
    return true;
  }
  return false;
}

_isPositive(amount) {
  const isPositive = amount > 0;
  if (!isPositive) {
    console.error('Amount must be positive!');
    return false;
  }
  return true;
}

_isAllowed(amount) {
  if (!this._isPositive(amount)) return false;

  const isAllowed = this.balance - amount >= 0;
  if (!isAllowed) {
    console.error('You have insufficent funds!');
    return false;
  }
  return true;
}

const a = new Account('a', 100);
const b = new Account('b', 0);


output.innerText += `before:  a: ${a.balance}, b: ${b.balance}\n`;

a.transfer(100, b);

output.innerText += `after:  a: ${a.balance}, b: ${b.balance}\n`;
<div id="output"></div>