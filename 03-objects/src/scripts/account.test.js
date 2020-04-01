// npm test -- -t account

import {Account, AccountController} from "./account.js";

const myAccount = new Account ("David Chan", 200);

test("Testing _isPositive", () => {
    expect(myAccount._isPositive(5)).toBe(true);
    expect(myAccount._isPositive(-5)).toBe(false);
});

test("Testing deposit", () => {    
    expect(myAccount.deposit(50)).toBe(250); 
    expect(myAccount.deposit(-50)).toBe("Amount entered is negative");
    expect(myAccount.deposit(500)).toBe(750);   
});

test("Testing _isAllowed", () => {
    expect(myAccount._isAllowed(50)).toBe(true);
    expect(myAccount._isAllowed(1550)).toBe(false);
});

test("Testing withdraw", () => {
     expect(myAccount.withdraw(50)).toBe(700);
     expect(myAccount.withdraw(-50)).toBe("Amount is negative");
     expect(myAccount.withdraw(1250)).toBe("Insufficient balance");
});

// import {accountcontroller}....