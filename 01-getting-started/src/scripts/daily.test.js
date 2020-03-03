import convert from './daily'

test('Convert Celsius to Fahrenheit', () => {
    expect(convert.convertToFahrenheit(0)).toBe(32);
    expect(convert.convertToFahrenheit(100)).toBe(212);    
});