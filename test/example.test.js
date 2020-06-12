// IMPORT custom fuctions to test here:
// import { example } from './example.js';
import { addition, subtraction, multiply, divide } from '../utils.js';
//
//what is QUnit? it is a utility included with the alchemy bootstrap. use it!
const test = QUnit.test;
//
//example test syntax for reference
test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});
//
//each function recalled in the import above is tested here
//view the test/index.html in live to see the test results!
//when testing site, its always helpful to keep your inspect>console window open!
//
test('addition', function(expect) {
    const firstnum = 2;
    const secondnum = 4;
    const expected = 6;
    const actual = addition(firstnum, secondnum);
    expect.equal(expected, actual);
});
test('subtraction', function(expect) {
    const firstnum = 2;
    const secondnum = 4;
    const expected = -2;
    const actual = subtraction(firstnum, secondnum);
    expect.equal(expected, actual);
});
test('multiply', function(expect) {
    const firstnum = 2;
    const secondnum = 4;
    const expected = 8;
    const actual = multiply(firstnum, secondnum);
    expect.equal(expected, actual);
});
test('divide', function(expect) {
    const firstnum = 6;
    const secondnum = 2;
    const expected = 3;
    const actual = divide(firstnum, secondnum);
    expect.equal(expected, actual);
});