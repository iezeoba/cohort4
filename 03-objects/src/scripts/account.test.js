// npm test -- -t acct

import {Account} from "./account.js";

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



// test("Test the mortgage calculation", () => {
//     let result = mortFunctions.calcLoan(1000, 1, 1);
//     expect(result.monthly).toBe(83.79);
//     expect(result.total).toBe(1005.42);
//     expect(result.interest).toBe(5.42);

//     result = mortFunctions.calcLoan(1000, 10, 1);
//     expect(result.monthly).toBe(87.92);
//     expect(result.total).toBe(1054.99);
//     expect(result.interest).toBe(54.99);

//     result = mortFunctions.calcLoan(1000, 10, 10);
//     expect(result.monthly).toBe(13.22);
//     expect(result.total).toBe(1585.81);
//     expect(result.interest).toBe(585.81);

//     result = mortFunctions.calcLoan("", "", "");
//     expect(result.monthly).toBe("");
//     expect(result.total).toBe("");
//     expect(result.interest).toBe("");

// });

// test("Test the rounding function.", () => {
//     expect(mortFunctions.round(123.1234)).toBe(123.12);
//     expect(mortFunctions.round(1234.2345)).toBe(1234.23)
// });