import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");    
    expect(functions.size(101)).toBe("extra large");
});

test ("is the number even?", () => {
    expect(functions.isEven(2)).toBe("true");
    expect(functions.isEven(3)).toBe("false");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Does that subtract function work?', () => {
    expect(functions.subtract(5,2)).toBe(3);
    expect(functions.subtract(10,5)).toBe(5);
});

test('Does that multiply function work?', () => {
    expect(functions.multiply(1,2)).toBe(2);
    expect(functions.multiply(10,2)).toBe(20);
});

test('Does that divide function work?', () => {
    expect(functions.divide(6,2)).toBe(3);
    expect(functions.divide(15,3)).toBe(5);
    expect(functions.divide(4,0)).toBe("Can't divide by zero");
});

// Additional tests just for practice and fun
test('Does the greeting function work?', () => {
    expect(functions.greet("Hello")).toBe("Howdy");
    expect(functions.greet("Hallo")).toBe("Guten Tag");
    expect(functions.greet("Hola")).toBe("Buenos Dias");
    expect(functions.greet("Random string")).toBe("Goedendag");
    expect(functions.greet("Some other string")).toBe("Goedendag");
});
