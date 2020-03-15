import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));
// Simple Calculator
// sum.addEventListener('click', () => {
//     console.log("I'm the button click");
//     resultscreen.textContent = result;
//     })
// var a, b, result;
// setValues: () => {
// a = Number(document.getElementById("a").value);
// b = Number(document.getElementById("b").value);
// };
// sum: () => {
//     setValues();
//     result = a+b;
//     alert(result);
// };
// difference: () => {
//     setValues();
//     result = a-b;
//     alert(result);
// };
// product: () => {
//     setValues();
//     result = a*b;
//     alert(result);
// };
// remainder: () => {
//     setValues();
//     result = a/b;
//     alert(result);
// };

// My Calculator Section
var num1;
var num2;
var oper;
one.addEventListener('click',() => {
    current.textContent += "1";
});
two.addEventListener('click',() => {
    current.textContent += "2";
});
three.addEventListener('click',() => {
    current.textContent += "3";
});
four.addEventListener('click',() => {
    current.textContent += "4";
});
five.addEventListener('click',() => {
    current.textContent += "5";
});
six.addEventListener('click',() => {
    current.textContent += "6";
});
seven.addEventListener('click',() => {
    current.textContent += "7";
});
eight.addEventListener('click',() => {
    current.textContent += "8";
});
nine.addEventListener('click',() => {
    current.textContent += "9";
});
zero.addEventListener('click',() => {
    current.textContent += "0";
});
period.addEventListener('click',() => {
    current.textContent += ".";
});
plus.addEventListener('click',() => {
    num1 = current.textContent;
    oper = "+";
    current.textContent += "+";
});
minus.addEventListener('click',() => {
    num1 = current.textContent;
    oper = "-";
    current.textContent += "-";
});
times.addEventListener('click',() => {
    num1 = current.textContent;
    oper = "*";
    current.textContent += "*";
});
divide.addEventListener('click',() => {
    num1 = current.textContent;
    oper = "÷";
    current.textContent += "÷";
});
clear.addEventListener('click',() => {
    current.textContent = "";
    previous.textContent = "";
});
backspace.addEventListener('click',() => {
    current.textContent = current.textContent.substr(0, current.textContent.length - 1);
});
equals.addEventListener('click', () => {
    var rslt1 = current.textContent.split(num1)[1];
    num2 = rslt1.substring(1);

    if (oper == "+") {
        previous.textContent = num1 + " " + oper + " " + num2 + " = " + functions.add(num1, num2);
    } else if (oper == "-") {
        previous.textContent = num1 + " " + oper + " " + num2 + " = " + functions.subtract(num1, num2);
    } else if (oper == "*") {
        previous.textContent = num1 + " " + oper + " " + num2 + " = " + functions.multiply(num1, num2);
    } else if (oper == "/") {
        previous.textContent = num1 + " " + oper + " " + num2 + " = " + functions.divide(num1, num2);
    }
    current.textContent = "";
});

// Canadian Taxes Section
var taxableIncome;
var b1 = 48535;
var b2 = 48534;
var b3 = 53404;
var b4 = 63895;

myButton.addEventListener('click', () => {
    l37.textContent = "";
    l39.textContent = "";
    l42.textContent = "";
});
l36.addEventListener('change', () => {
    taxableIncome = l36.value;
    l42.style.fontWeight = "bold";
    if (taxableIncome <= b1) {
        l37.innerHTML = "0";
        l39.innerHTML = "15% ~ CAD$" + taxableIncome;
        l42.innerHTML = "CAD$" + " " + functions.taxCalcBase1(taxableIncome);
    } else if (taxableIncome > b1 && taxableIncome <= 97069) {
        l37.innerHTML = "CAD$48535 | CAD$" + (taxableIncome - b1);
        l39.innerHTML = "15% ~ CAD$48535 | 20.5% ~ CAD$" + (taxableIncome - b1);
        l42.innerHTML = "CAD$" + " " + (functions.taxCalcBase1(b1) + functions.taxCalcBase2(taxableIncome - b1));

    } else if (taxableIncome > 97069 && taxableIncome <= 150473) {
        l37.innerHTML = "CAD$48535 | CAD$48534 | CAD$" + (taxableIncome - 97069);
        l39.innerHTML = "15% ~ CAD$48535 | 20.5% ~ CAD$48534 | 26% ~ CAD$" + (taxableIncome - 97069);
        l42.innerHTML = "CAD$" + (functions.taxCalcBase1(b1) + functions.taxCalcBase2(b2) + functions.taxCalcBase3(taxableIncome - 97069));

    } else if (taxableIncome > (150473) && taxableIncome <= 214368) {
        l37.innerHTML = "CAD$48535 | CAD$48534 | CAD$53404 | CAD$" + (taxableIncome - 150473);
        l39.innerHTML = "15% ~ CAD$48535 | 20.5% ~ CAD$48534 | 26% ~ CAD$53404 | 29% ~ CAD$" + (taxableIncome - 150473);
        l42.innerHTML = "CAD$" + (functions.taxCalcBase1(b1) + functions.taxCalcBase2(b2) + functions.taxCalcBase3(b3) + functions.taxCalcBase4(taxableIncome - 150473));

    } else if (taxableIncome > 214368) {
        l37.innerHTML = "CAD$48535 | CAD$48534 | CAD$53404 | CAD$63895 | CAD$" + (taxableIncome - 214368);
        l39.innerHTML = "15% ~ CAD$48535 | 20.5% ~ CAD$48534 | 26% ~ CAD$53404 | 29% ~ CAD$63895 | CAD$" + (taxableIncome - 214368);
        l42.innerHTML = "CAD$" + (functions.taxCalcBase1(b1) + functions.taxCalcBase2(b2) + functions.taxCalcBase3(b3) + functions.taxCalcBase4(b4) + functions.taxCalcBase5(taxableIncome - 214368));

    }
});

// Working With Arrays Section
let workingWithArrays = [];
addlist.addEventListener("click",() => {
    if(isNaN(inputlist.value)) {
    messagebar.textContent = "The input is not a number";
    } else if (Number(inputlist.value !== "")) {
    workingWithArrays.push(inputlist.value);
    messagebar.textContent = "Your number has been added to the array";
    }
    console.log(inputlist.value);
    console.log(workingWithArrays);
});
showlist.addEventListener("click", () => {
    messagebar.textContent = workingWithArrays.toString();
});
totallist.addEventListener("click", () => {
    let sumlist = workingWithArrays.reduce(function sumarr(total, num) {
        return Number(total) + Number(num);
    }, 0);
    inputlist.value = 0;     
    messagebar.textContent = "Total =" + " " + Number(sumlist);
    console.log(sumlist);
});
clearlist.addEventListener('click', () => {     
	workingWithArrays.length = 0;//or workingWithArrays = [];     
    inputlist.value = ""; 
    messagebar.textContent = "";
    console.log(workingWithArrays);
});

// Working With Dictionaries Section
const province = {
    AB: "Alberta",
    BC: "British Columbia",
    MB: "Manitoba",
    NB: "New Brunswick",
    NL: "Newfoundland and Labrador",
    NS: "Nova Scotia",    
    ON: "Ontario",
    PE: "Prince Edward Island",
    QC: "Quebec",
    SK: "Saskatchewan"
};

lookup.addEventListener("click", () => {
let inputString = inputarea.value;
let inputResult = inputString.toUpperCase();
        if (province.hasOwnProperty(inputResult) == true) {
            messagearea.textContent = province[inputResult];
            console.log(inputarea.value);
          } else {
            messagearea.textContent = "Please enter a valid province code";
          }
});
