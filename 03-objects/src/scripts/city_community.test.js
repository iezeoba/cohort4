import { City, Community } from './city_community.js';
// import { Community } from './city_community.js';

test("Testing movedIn", () => {
    let city = new Community();
    city.createCity('Lethbridge', 49.69, -112.84, 700);
    city.createCity('Calgary', 51.04, -114.07, 189000);
    city.createCity('Medicine Hat', 50.02, -110.70, 2500);
    expect(city.movedIn(population, 2000)).toBe(3);
});

test("Testing nextKey", () => {
    let city = new Community();
    expect(city.nextKey()).toBe(1);
});

test("Testing createCity", () => {
    let city = new Community();
    city.createCity('Lethbridge', 49.69, -112.84, 700);
    expect(city.allCities.length).toBe(1);
    city.createCity('Calgary', 51.04, -114.07, 189000);
    city.createCity('Medicine Hat', 50.02, -110.70, 2500);
    console.log(city.allCities);
    expect(city.allCities.length).toBe(3);
});

test("Testing cityFinder", () => {
    let city = new Community();
    city.createCity('Lethbridge', 49.69, -112.84, 700);
    city.createCity('Calgary', 51.04, -114.07, 189000);
    city.createCity('Medicine Hat', 50.02, -110.70, 2500);
    expect(city.cityFinder("Calgary").latitude).toBe(51.04);
    expect(city.cityFinder("Medicine Hat").longitude).toBe(-110.70);
    expect(city.cityFinder("Lethbridge").population).toBe(700);
});

test("Testing whichSphere", () => {
    let city = new Community();
    city.createCity('Lethbridge', 49.69, -112.84, 700);
    city.createCity('Calgary', 51.04, -114.07, 189000);
    city.createCity('Medicine Hat', 50.02, -110.70, 2500);
    expect(city.whichSphere("Calgary")).toBe("This location is in the Northern Hemisphere");
    expect(city.whichSphere("Medicine Hat")).toBe("This location is in the Northern Hemisphere");
    expect(city.whichSphere("Lethbridge")).toBe("This location is in the Northern Hemisphere");
});

test("Testing getMostNorthern", async () => {
    let city = new Community();
    let cityArr = [];
    cityArr.push(await city.createCity('Lethbridge', 49.69, -112.84, 700));
    cityArr.push(await city.createCity('Calgary', 51.04, -114.07, 189000));
    cityArr.push(await city.createCity('Medicine Hat', 50.02, -110.70, 2500));
    expect(await city.getMostNorthern(cityArr)).toBe("Calgary");
});

test("Testing getMostSouthern", async () => {
    let city = new Community();
    let cityArr = [];
    cityArr.push(await city.createCity('Lethbridge', 49.69, -112.84, 700));
    cityArr.push(await city.createCity('Calgary', 51.04, -114.07, 189000));
    cityArr.push(await city.createCity('Medicine Hat', 50.02, -110.70, 2500));
    expect(await city.getMostSouthern(cityArr)).toBe("Lethbridge");
});

test("Testing getPopulation", async () => {
    let city = new Community();
    let cityArr = [];
    cityArr.push(await city.createCity('Lethbridge', 49.69, -112.84, 700));
    cityArr.push(await city.createCity('Calgary', 51.04, -114.07, 189000));
    cityArr.push(await city.createCity('Medicine Hat', 50.02, -110.70, 2500));
    expect(await city.getPopulation("Calgary", cityArr)).toBe(189000);
    expect(await city.getPopulation("Lethbridge", cityArr)).toBe(700);
    expect(await city.getPopulation("Medicine Hat", cityArr)).toBe(2500);
    // Testing increasePopulation()
    expect(await city.increasePopulation("Calgary", 1000)).toBe(190000);
    expect(await city.increasePopulation("Lethbridge", 200)).toBe(900);
    expect(await city.increasePopulation("Medicine Hat", 300)).toBe(2800);
    // Testing decreasePopulation()
    expect(await city.decreasePopulation("Calgary", 2000)).toBe(188000);
    expect(await city.decreasePopulation("Lethbridge", 300)).toBe(600);
    expect(await city.decreasePopulation("Medicine Hat", 100)).toBe(2700);
});

test("Testing deleteCity", async () => {
    let city = new Community();
    let cityArr = [];
    cityArr.push(await city.createCity('Lethbridge', 49.69, -112.84, 700));
    cityArr.push(await city.createCity('Calgary', 51.04, -114.07, 189000));
    cityArr.push(await city.createCity('Medicine Hat', 50.02, -110.70, 2500));
    let newCityArr = await city.deleteCity("Calgary", cityArr)
    expect(newCityArr.length).toBe(2);
    expect(newCityArr[0].name).toBe("Lethbridge");
    expect(newCityArr[1].latitude).toBe(50.02);
});






