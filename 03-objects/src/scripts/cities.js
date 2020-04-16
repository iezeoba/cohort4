import {Community} from "./community.js";

let city = new Community();
window.addEventListener("load", loadCities);
async function loadCities() {
    let newCity = await city.getCities();
    // newCity = await city.getCities("http://127.0.0.1:5000/load");
    // newCity = await city.getCities("http://127.0.0.1:5000/all");
    
    console.log(newCity);
};
let add = document.getElementById("addCity");
add.addEventListener("click", addCity);
async function addCity() {
    let myCity = await postData("http://127.0.0.1:5000/add", {city: inputCity.value, key: 4});
    myCity = await fetch ("http://127.0.0.1:5000/all");
    let allCities = myCity.json();
    console.log(allCities);
    let iframe = document.getElementById("map");
    iframe.src=`https://maps.google.com/maps?q=${inputCity.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}
async function postData(URL = '', data = {}) { //postData can be used to GET or POST data. if the parameter required is only a url, it is getting. if a url and another parameter, it is posting

    // Default options are marked with *
    const response = await fetch(URL, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });

    const json = await response.json();    // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;
    // console.log(json, typeof(json));
    return json;
}
