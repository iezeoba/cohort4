const syntax = {
//1. define attributes / variables
//number
isNumber: (num) => {
    return typeof(num);
},
//string
isString: (str) => {
    return typeof(str);
},
//boolean
isBoolean: (param) => {
    return typeof(param); //checks if parameter is a boolean
},
// array
isanArray: (arr) => {
    return (Array.isArray(arr)); //checks if arr is an array
},
// dictionary / objects
nameOfPerson: (firstname, lastname) => {
  return firstname + " " + lastname; 
},
// undefined
isUndefined: (a) => {
    return typeof(a);
},
//2.  sample if / else
ifElseStatement: (num) => {
    if(num === 10) {
        return true;
    } else return false;
},

//3. functions
// parameters
// returns

//4. arrays
// add to the front
addToArrFront: (myArray, num) => {
   myArray.unshift(num); 
   return myArray;
},
// add to the end
addToArrEnd: (endArray, num) => {
    endArray.push(num);
    return endArray;
},
// update values
updateArr: (theArray, num) => {
    theArray[0] = num;
    return theArray;
},
//5. loops 
// for
myForLoop: () => {
    var myLoop = [];
    for (var i = 0; i < 5; i++) {
    myLoop.push(i);
    }; return myLoop;
},
// for/in
myForinLoop: () => {
    const forinLoop = {Make: "Toyota", Model: "Camry", Year: "2020"};
    let a = "";    
    for (let i in forinLoop) {
        a += forinLoop[i]+ " ";        
    };
    return a;
},
// while
myWhileLoop: () => {
    let sum = 0;
    let i = 1;
    while (i < 5) {
        sum += i;
        i++;
    } return sum;
},
// do while
myDoWhile: () => {
    let sum = 0;
    let i = 1;
    do {sum += i; i++;
    } while (i < 5);
    return sum;    
},
// forEach (with array and function)
myForEach: (val) => {    
    const square = [];
    val.forEach(function myFor(value) {
    square.push(value*value);});
    return square;

},
//6. Objects / Dictionaries
// declare object
// lookup key to retrieve value
object: () => {
    function person (first, last, age) {
            this.firstname = first;
            this.lastname = last;
            this.age = age;
        }
        let name = new person("Michael","Fullstack", 25);
    return name["firstname"]+" "+name["lastname"]+" "+name["age"];
}
};
export default syntax;