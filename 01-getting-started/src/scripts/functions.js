
const functions = {

    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num <= 100) return "large";
        return "extra large";

    },

    isEven: (num) => {
        if (num % 2 === 0) return "true";
        else return "false";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    multiply: (num1, num2) => {
        return num1 * num2;
    },

    divide: (num1, num2) => {
        if (num2 === 0) {
            return "Can't divide by zero"
        } else {
            return num1 / num2;
        }
    },

    taxCalcBase1: (num) => {
        return Number(num * 0.15);
    },

    taxCalcBase2: (num) => {
        return Number(num * 0.205);
    },
    taxCalcBase3: (num) => {
        return Number(num * 0.26);
    },

    taxCalcBase4: (num) => {
        return Number(num * 0.29);
    },

    taxCalcBase5: (num) => {
        return Number(num * 0.33);
    },

    // Additional business logics just for practice and fun
    greet: (greeting) => {
        let response = "Goedendag";
        if (greeting === "Hello") {
            response = "Howdy";
        } else if (greeting === "Hallo") {
            response = "Guten Tag";
        } else if (greeting === "Hola") {
            response = "Buenos Dias";
        }
        return response;
    }
};


export default functions;
