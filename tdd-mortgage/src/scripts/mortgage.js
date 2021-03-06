const mortFunctions = {
    play() {
        console.log("in mortFunctions");
    },
    // 
    // The stub is the same as the signature
    // 
    calcLoan(principal, yearInterest, years) {

        const interest = yearInterest / 100 /12;
        const payments = years * 12;

    // Now compute the monthly payment figure using esoteric math
        const x = Math.pow(1 + interest, payments);
        const monthly = (principal * x * interest) / (x - 1);
        const total = monthly * payments;
        const totalInterest = total - principal;

    // If we have valid numbers return them

        if(monthly & total) {
            return {
                monthly: mortFunctions.round(monthly),
                total: mortFunctions.round(total),
                interest: mortFunctions.round(totalInterest)
            }
        }
    
    // If the numbers are not valid 

            return {
                monthly: "",
                total: "",
                interest: ""
            }

        // return {monthly: 0, total: 0, interest: 0}
    },  // return {monthly: 83.79, total: 1005.42, interest: 5.42}

    round(num) {
        return Math.round(num*100) / 100;
    }
}
export default mortFunctions;