import { City, Community } from './city_community.js';
// import { Community } from './city_community.js';

test("Testing nextKey", () => {
let city = new Community();
expect(city.nextKey()).toBe(1);
});

test("Testing createCity", () => {
    let city = new Community();
city.createCity('Lethbridge', 52.92, 79.04, 700);
expect(city.allCities.length).toBe(1);
city.createCity('Calgary', 53.07, 62.12, 189000);
city.createCity('Medicine Hat', 41.92, 56.25, 2500);
console.log(city.allCities);
expect(city.allCities.length).toBe(3);
});

test("Testing cityFinder", () => {
let city = new Community();
city.createCity('Lethbridge', 52.92, 79.04, 700);
city.createCity('Calgary', 53.07, 62.12, 189000);
city.createCity('Medicine Hat', 41.92, 56.25, 2500);
expect(city.cityFinder("Calgary").latitude).toBe(53.07);
expect(city.cityFinder("Medicine Hat").longitude).toBe(56.25);
expect(city.cityFinder("Lethbridge").population).toBe(700);
});

test("Testing whichSphere", () => {
    let city = new Community();
    city.createCity('Lethbridge', 52.92, 79.04, 700);
    city.createCity('Calgary', 53.07, 62.12, 189000);
    city.createCity('Medicine Hat', 41.92, 56.25, 2500);
    expect(city.whichSphere("Calgary")).toBe("This location is in the Northern Hemisphere");
    expect(city.whichSphere("Medicine Hat")).toBe("This location is in the Northern Hemisphere");
    expect(city.whichSphere("Lethbridge")).toBe("This location is in the Northern Hemisphere");
    });

    test("Testing whichSphere", () => {
        let city = new Community();
        let cityArr = [];
        cityArr.push(city.createCity('Lethbridge', 52.92, 79.04, 700));
        cityArr.push(city.createCity('Calgary', 53.07, 62.12, 189000));
        cityArr.push(city.createCity('Medicine Hat', 41.92, 56.25, 2500));
        // expect(city.whichSphere("Calgary")).toBe("This location is in the Northern Hemisphere");
        // expect(city.whichSphere("Medicine Hat")).toBe("This location is in the Northern Hemisphere");
        expect(city.getMostNorthern(cityArr)).toBe("Calgary");
        });






