import { Community, City } from "./city_community.js";

let city = new Community();
window.addEventListener("load", loadCities);
// let addNewCity = document.getElementById("createCity");
createCity.addEventListener("click", addCity);
let iframe = document.getElementById("map");
deleteCity.addEventListener("click", removeCity)

async function loadCities() {
    let newCity = await city.getCities();
    // newCity = await city.getCities("http://127.0.0.1:5000/load");
    // newCity = await city.getCities("http://127.0.0.1:5000/all");
    mostNorthern.textContent = `Most Northern Location: ${city.getMostNorthern(city.allCities)}`
    mostSouthern.textContent = `Most Southern Location: ${city.getMostSouthern(city.allCities)}`
    iframe.src = `https://maps.google.com/maps?q=${(newCity[0].name).toLowerCase()}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    console.log(newCity);
};
function addCity() {
    // let myCity = await city.postData("http://127.0.0.1:5000/add", {city: idCity.value, key: 4, lat: Number(idLatitude.value), long: Number(idLongitude.value)});
    city.createCity(idCity.value, idLatitude.value, idLongitude.value, idPopulation.value, checkBox());
    mostNorthern.textContent = `Most Northern Location: ${city.getMostNorthern(city.allCities)}`
    mostSouthern.textContent = `Most Southern Location: ${city.getMostSouthern(city.allCities)}`
    //    myCity = await fetch ("http://127.0.0.1:5000/all");

    iframe.src = `https://maps.google.com/maps?q=${idCity.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

function checkBox() {
    if (saveCity.checked) {
        return true
    } else {
        return false
    }
}

async function removeCity() {
    await city.deleteCity(delCity.value, city.allCities);
}

