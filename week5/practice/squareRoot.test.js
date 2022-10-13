function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError("You can't find the square root of negative numbers")
    }
    return Math.squrt(number);
};

test('square root of 4 is 2', () => {
    expect(squareRoot(4)).toBe(2);
});
//first parameter is a string that explains what we are testing
//second parameter is an anonymous function that contains a function called expect
//function expect() takes the function were testing as an argument and returns an expectation object
//expectation ogject has a number of methods called matchers
//matcher in above example is .toBe()
//.toBe() test to see if the value returned by our squareRoot() function is the same as the value provided as an arugment