//util.js files are where the custom functions are defined
//
//
//function declaration example - we are defining the custom function 'add' as a pure function
//function add(
    /*DEFINING or DECLARING arguements go here - generic names for input, not referenced objects or vars*/
    //firstNumber, secondNumber) {
    //return firstNumber + secondNumber;}
//example of how to use function
//const sum = add(addOne, addTwo);
//
//impure functions give various outputs & are more complicated
//
//make sure to include 'export' for each function, since they will be imported in app.js & test.js
//
export function addition(input1, input2) {
    return input1 + input2;
}
export function subtraction(input1, input2) {
    return input1 - input2;
}
export function multiply(input1, input2) {
    return input1 * input2;
}
export function divide(input1, input2) {
    return input1 / input2;
}