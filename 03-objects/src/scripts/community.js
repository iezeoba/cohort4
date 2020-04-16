export class Community {
    constructor () {
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