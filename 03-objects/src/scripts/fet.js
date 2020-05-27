const functions = {

    check() {
        console.log("Working With APIs")
    },

    url: "https://jsonplaceholder.typicode.com/users",

    getFirstName(data) {
        return (data[0].name);
    },

    getAllFirstNames(data) {
        return data.map((data) => data.name)
    },

    showDelayProblem() {
        console.log('One');
        setTimeout(() => {          // Simulates a fetch
            console.log("Two");
        }, 1 * 1000);
        console.log('Three');       // We have a problem Houston
    },

    async showDelaySolution() {
        try {
            console.log('One');
            const value = await new Promise((resolve, reject) =>      // Simulate fetch
                setTimeout(() => resolve("Two"),
                    1 * 1000));
            // Now that we have the value we can use it.
            console.log(value);
            console.log('Three');
        } catch (error) {
            console.log(error);
        }
    },

    async getUsers() {
        try {
            const response = await fetch(functions.url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw (error);
        }
    },

    async workWithData() {
        const data = await functions.getUsers();
        console.log(functions.getFirstName(data));
        console.log(functions.getAllFirstNames(data));
    },
};
export default functions;