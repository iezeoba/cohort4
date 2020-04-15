import {Community} from "./community.js";

let city = new Community();
window.addEventListener("load", loadCities);
async function loadCities() {
    let newCity = await city.getCities("http://127.0.0.1:5000/clear");
    // newCity = await city.getCities("http://127.0.0.1:5000/load");
    // newCity = await city.getCities("http://127.0.0.1:5000/all");
    
    console.log(newCity);
}