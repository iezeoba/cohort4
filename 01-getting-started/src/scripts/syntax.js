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
// while
// do while
// forEach (with array and function)
//6. Objects / Dictionaries
// declare object
// lookup key to retrieve value
};

export default syntax;