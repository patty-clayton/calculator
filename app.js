//patty javascript sloppy notes
//
//built-in utility objects include:
//document
//console
//Math
//
//custom defined objects are usually variables or arrays of variables"
//
//some useful things
//document.getElementById() [references html id]
//document.querySelector()
//[objectName].textContent = 'The text you want to show';
//
//...look into built-in properties!
//...look into built-in functions!
//
//event listener - on 'click' of 'buttonOne', the thing inside the curlies happens
//buttonOne.addEventListener('click', () => {
    //resultOne.textContent = Number(addOne.value) + Number(addTwo.value) });
//
//
//
//
//
//this is where the functions are put to work
//
// IMPORT custom fuctions to use here:
// import { exampleFunctionName1, exampleFuctionName2 } from '../example.js';
//
import { addition, subtraction, multiply, divide } from './utils.js';
//
//patty calculator v1 vanilla javascript
//(we can use react to further consolidate DRY code via libraries - all the document.getElementById's (which are called DOMS) repetition - when we are more advanced!)
//this is a study of testing & modularization
//
//grab all the DOM input fields
const addOne = document.getElementById('entry1');
const addTwo = document.getElementById('entry2');
const subtractOne = document.getElementById('entry3');
const subtractTwo = document.getElementById('entry4');
const multOne = document.getElementById('entry5');
const multTwo = document.getElementById('entry6');
const divOne = document.getElementById('entry7');
const divTwo = document.getElementById('entry8');
//
//grab all the DOM buttons
const buttonOne = document.getElementById('b1');
const buttonTwo = document.getElementById('b2');
const buttonThree = document.getElementById('b3');
const buttonFour = document.getElementById('b4');
//
//grab all the DOM results
const resultOne = document.getElementById('sum');
const resultTwo = document.getElementById('difference');
const resultThree = document.getElementById('product');
const resultFour = document.getElementById('quotient');
//
//each button's click event - recall our functions to do the math
buttonOne.addEventListener('click', () => {
    resultOne.textContent = addition(Number(addOne.value), Number(addTwo.value));
});
buttonTwo.addEventListener('click', () => {
    resultTwo.textContent = subtraction(Number(subtractOne.value), Number(subtractTwo.value));
});
buttonThree.addEventListener('click', () => {
    resultThree.textContent = multiply(Number(multOne.value), Number(multTwo.value));
});
buttonFour.addEventListener('click', () => {
    resultFour.textContent = divide(Number(divOne.value), Number(divTwo.value));
});