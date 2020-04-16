export class Community {
    constructor() {
        this.url = "http://127.0.0.1:5000/";
        this.allCities = [];
    }
    async getCities(url = '', data = {}) {
        let cityData = await fetch("http://127.0.0.1:5000/clear");
        cityData = await fetch("http://127.0.0.1:5000/load");
        cityData = await fetch("http://127.0.0.1:5000/all");
        let city = await cityData.json();
        return city;

    }

}

class City {
    constructor(name, latitude, longitude, population, key) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
        this.key = key;
    }

    show() {
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