export class City {
    constructor() {
        this.allCities = [];
        this.count = 0;
        // this.key = key;
    }

    show(cityname) {
        let string = "";
        return string += `${this.name} is located at latitude ${this.latitude} and longitude ${this.longitude} and has a population of about ${this.population}`;
    }

    movedIn(immigrants) {
        this.population = this.population + immigrants;
    }

    movedOut(exits) {
        this.population = this.population - exits;
    }

    howBig() {
        if (this.population > 100000) {
            return "City";
        } else if (this.population > 19999 && this.population <= 100000) {
            return "Large Town";
        } else if (this.population > 999 && this.population <= 19999) {
            return "Town";
        } else if (this.population > 100 && this.population <= 999) {
            return "Village";
        } else {
            return "Hamlet";
        }
    }
}

export class Community {
    constructor() {
        this.newCity = new City();
        this.cityKey;
        this.url = 'http://localhost:5000/';
        // this.url = "http://127.0.0.1:5000/";
        this.allCities = [];
        this.counter = 1;
    }

    nextKey() {
        return this.counter++;
    }

    async getCities(url = '', data = {}) {
        let cityData = await fetch("http://127.0.0.1:5000/clear");
        cityData = await fetch("http://127.0.0.1:5000/load");
        cityData = await fetch("http://127.0.0.1:5000/all");
        let city = await cityData.json();
        return city;
    }

    async createCity(name, latitude, longitude, population) {
        let key = this.nextKey();
        let city = {};
        city.name = name;
        city.latitude = latitude;
        city.longitude = longitude;
        city.population = population;
        city.key = key;
        this.allCities.push(city);
        // let data = await functions.postData(this.url + "add", { name: name, latitude: latitude, longitude: longitude, population: population, key: key });
        return city;
    }

    cityFinder(cityname) {
        let index;// = this.allCities.findIndex(city => city.name === cityname);
        for (let i = 0; i < this.allCities.length; i++) {
            if (cityname === this.allCities[i].name) {
                    index = i
            }
        }
        return this.allCities[index];
    }

    whichSphere(cityname) {
        let sphere = this.cityFinder(cityname).latitude;
        if (sphere > 0) {
            return `This location is in the Northern Hemisphere`;
        } else if (sphere < 0) {
            return `This location is in the Southern Hemisphere`;
        } else {
            return "This location is on the equator";
        }
    }
    getMostNorthern(this.allCities) {
        let string = "";
        return string += `${Object.values(this.allCities.reduce((a, b) => b.latitude > a.latitude ? b : a))}`;
    }

    getMostSouthern() {
        let string = "";
        return string += `${Object.values(this.allCities.reduce((a, b) => b.latitude < a.latitude ? b : a))}`;
    }

    getPopulation() {
        let sum = 0;
        for (var i = 0; i < this.allCities.length; i++) {
            sum = sum + this.allCities[i].population;
        } return sum;
    }

    increasePopulation(cityname, amount) {
        this.cityFinder(cityname).movedIn(amount);
        return this.cityFinder(cityname).this.population();
    }

    decreasePopulation(cityname, amount) {
        this.cityFinder(local).movedOut(amount);
        return this.cityFinder(cityname).this.population();
    }

    deleteCity(cityname) {
        this.allCities.splice(this.cityFinder(cityname), 1);
    }
};
    // export default {Community, City}; //this collective export method is an alternative to the private export method used in this file. both are valid.