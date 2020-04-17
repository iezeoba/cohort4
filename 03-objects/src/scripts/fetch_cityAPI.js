export class getAPICities {
    constructor() {
        this.allAPICities = [];
        this.url = `https://restcountries.eu/rest/v2/capital/`; // url of api used
    }
    getCityIndex = (ctName) => {
        try {
            let count = 0;
            for (let i = 0; i < this.allAPICities.length; i++) {
                if (ctName == this.allAPICities[i].capital.toLowerCase()) {
                    count = i;
                }
            }
            return count;
        } catch (error) {
            alert(`${ctName} is not stored.`, error);
            return false;
        }

    }
    deleteCity = async (ctName) => {
        this.allAPICities.splice(this.getCityIndex(ctName), 1);
    }
    getCity = async (cityName) => {
        try {
            const response = await fetch(this.url + `${cityName}`); //Use GET to retrieve city data
            let data = await response.json();// parse it as json format
            return data; //return the data

        } catch (error) {
            // alert(`${cityName} is not a capital city.`, error);

        }
    }
    getRealCityData = async (ct) => {
        try {
            let data = await this.getCity(ct); //get the parsed data
            return data; //return the data           
        } catch (error) {
            // alert(`${cityName} is not a capital city.`, error);

        }
    }
}