
const functions = {
    
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num <= 100) return "large";
        return "extra large";

    },

    isEven: (num)=> {
        if (num%2 == 0) return "true";
        else return "false";
    },

    add: (num1, num2) => {
        return Number(num1) + Number(num2);
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    }

    
};

export default functions;
