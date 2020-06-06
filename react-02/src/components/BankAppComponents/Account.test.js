import { Account, AccountController } from "./Account.js";

// Tests for Account class methods
test("Testing _isPositive", () => {
    const myAccount = new Account("k1", "David Chan", "savings", 200);
    expect(myAccount._isPositive(5)).toBe(true);
    expect(myAccount._isPositive(-5)).toBe(false);
});

test("Testing deposit", () => {
    const myAccount = new Account("k1", "David Chan", "savings", 200);
    expect(myAccount.deposit(50)).toBe(Number(250).toFixed(2));
    expect(myAccount.deposit(-50)).toBe("Amount entered is negative");
    expect(myAccount.deposit(500)).toBe(Number(750).toFixed(2));
});

test("Testing _isAllowed", () => {
    const myAccount = new Account("k1", "David Chan", "savings", 200);
    expect(myAccount._isAllowed(50)).toBe(true);
    expect(myAccount._isAllowed(1550)).toBe(false);
});

test("Testing withdraw", () => {
    const myAccount = new Account("k1", "David Chan", "savings", 200);
    expect(myAccount.withdraw(50)).toBe(Number(150).toFixed(2));
    expect(myAccount.withdraw(-50)).toBe("Amount is negative");
    expect(myAccount.withdraw(1250)).toBe("Insufficient balance");
});

// Tests for AccountController methods
test("Testing key", () => {
    const myCtrl = new AccountController()
    let key = myCtrl.nextKey();
    expect(key).toBe("k1");
    key = myCtrl.nextKey();
    expect(key).toBe("k2");
    key = myCtrl.nextKey();
    expect(key).toBe("k3");
});

test("Testing createAccount", () => {
    const myCtrl = new AccountController(); //Instantiating an AccountController

    // --- Testing account creation and key assignment --- //
    expect(myCtrl.bankaccounts.length).toBe(0);
    let key = myCtrl.createAccount("David Chan", "Savings", 200);
    expect(key).toBe("k1");
    expect(myCtrl.bankaccounts.length).toBe(1);
    key = myCtrl.createAccount("David Chan", "Checking", 800);
    expect(key).toBe("k2");
    expect(myCtrl.bankaccounts.length).toBe(2);
    key = myCtrl.createAccount("David Chan", "RESP", 1200);
    expect(key).toBe("k3");
    expect(myCtrl.bankaccounts.length).toBe(3);

    // --- Testing account retrieval using key --- //
    let account = myCtrl.getAccount("k1");
    expect(account.name).toBe("David Chan");
    expect(account.acctType).toBe("Savings");
    expect(account.key).toBe("k1");

    account = myCtrl.getAccount("k3");
    expect(account.name).toBe("David Chan");
    expect(account.acctType).toBe("RESP");
    expect(account.key).toBe("k3");

    // --- Testing the deposit method using key to retrieve account --- //
    myCtrl.PerformDeposit("k1", 1);
    account = myCtrl.getAccount("k1");
    console.log(account);
    expect(account.balance).toBe(201);

    myCtrl.PerformDeposit("k1", 5);
    account = myCtrl.getAccount("k1");
    console.log(account);
    expect(account.balance).toBe(206);

    // --- Testing the withdraw method using key to retrieve account --- //
    myCtrl.PerformWithdraw("k2", 2);
    account = myCtrl.getAccount("k2");
    console.log(account);
    expect(account.balance).toBe(798);

    myCtrl.PerformWithdraw("k2", 8);
    account = myCtrl.getAccount("k2");
    console.log(account);
    expect(account.balance).toBe(790);

    // --- Testing the delete method using key to retrieve account --- //
    myCtrl.PerformDelete("k1", myCtrl.bankaccounts);
    expect(myCtrl.bankaccounts.length).toBe(2);

    myCtrl.PerformDelete("k2", myCtrl.bankaccounts);
    expect(myCtrl.bankaccounts.length).toBe(1);
    console.log(myCtrl.bankaccounts);

});

// --- Testing the delete method independently --- //
test("Testing deleteAccount", () => {
    const myCtrl = new AccountController();

    let key = myCtrl.createAccount("David Chan", "Checking", 200);
    key = myCtrl.createAccount("Arnold Smith", "Credit Card", 400);
    key = myCtrl.createAccount("Michael Keys", "Savings", 600);

    expect(myCtrl.bankaccounts.length).toBe(3);

    myCtrl.PerformDelete("k1", myCtrl.bankaccounts);
    expect(myCtrl.bankaccounts.length).toBe(2);

    myCtrl.PerformDelete("k2", myCtrl.bankaccounts);
    expect(myCtrl.bankaccounts.length).toBe(1);
});