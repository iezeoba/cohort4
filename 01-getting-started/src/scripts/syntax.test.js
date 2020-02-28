import syntax from './syntax'
var arr = [1,2,3,4,5];
var myArray = [2,3,4,5];
var endArray = [1,2,3,4,5];
var theArray = [8,2,3,4,5];
let nameOfPerson = {firstname: "Ifeanyi", lastname: "Ezeoba"};
const eachArray = [2, 4, 6];
test("check that argument is number", () => {
    expect(syntax.isNumber(1)).toBe("number");
});

test("check that argument is a string", () => {
    expect(syntax.isString("hey")).toBe("string");
});

test("check that argument returns boolean", () => {
    expect(syntax.isBoolean(true)).toBe("boolean");
    expect(syntax.isBoolean(false)).toBe("boolean");
});

test("check if argument is an array", () => {
    expect(syntax.isanArray(arr)).toBe(true);
    expect(syntax.isanArray("arr")).toBe(false);
});

test("check full name of person", () => {
    expect(syntax.nameOfPerson(nameOfPerson.firstname, nameOfPerson.lastname)).toBe("Ifeanyi Ezeoba");
});

test("check if argument is defined", () => {
    var a;
    expect(syntax.isUndefined(a)).toBe("undefined");
});

test("check if argument is equal to given value", () => {
    expect(syntax.ifElseStatement(10)).toBe(true);
    expect(syntax.ifElseStatement(100)).toBe(false);
});

test("check if function adds value to beginning of array", () => {
    expect(syntax.addToArrFront(myArray,1)).toStrictEqual([1,2,3,4,5]);
});

test("check if function adds value to end of array", () => {
    expect(syntax.addToArrEnd(endArray,6)).toStrictEqual([1,2,3,4,5,6]);
});

test("replace a value with another value in the array", () => {
    expect(syntax.updateArr(theArray, 1)).toStrictEqual([1,2,3,4,5]);
});

test("check that for loop works", () => {
    expect(syntax.myForLoop()).toStrictEqual([0,1,2,3,4]);
});

test("check that for-in loop works", () => {
    expect(syntax.myForinLoop()).toBe("Toyota Camry 2020 ");
});

test("check that while loop works", () => {
    expect(syntax.myWhileLoop()).toBe(10);
});

test("check that do-while loop works", () => {
    expect(syntax.myDoWhile()).toBe(10);
});

test("check that for-each loop works", () => {
    expect(syntax.myForEach(eachArray)).toStrictEqual([4, 16, 36]);
});

test("lookup key to retrieve value", () => {     
    expect(syntax.object()).toBe("Michael Fullstack 25"); 
});

test("lookup value in object", () => {
    expect(syntax.lookupObjt("students.student3")).toBe("Ghassan Amir");
});




