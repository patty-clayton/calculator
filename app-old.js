//patty javascript sloppy
//
//built-in utility objects include:
//document
//console
//Math
//
//some useful things
//document.getElementById() [references html id]
//document.querySelector()
//[objectName].textContent = 'The text you want to show';
//
//built-in properties
//built-in functions
//
//custom defined objects are usually variables or arrays of variables"
//
//
//
//
//patty calculator v1
//
//grab all the input fields
const addOne = document.getElementById('entry1');
const addTwo = document.getElementById('entry2');
const subtractOne = document.getElementById('entry3');
const subtractTwo = document.getElementById('entry4');
const multOne = document.getElementById('entry5');
const multTwo = document.getElementById('entry6');
const divOne = document.getElementById('entry7');
const divTwo = document.getElementById('entry8');

//grab all the buttons
const buttonOne = document.getElementById('b1');
const buttonTwo = document.getElementById('b2');
const buttonThree = document.getElementById('b3');
const buttonFour = document.getElementById('b4');

//on each button click, log inputs to console & output result to span
buttonOne.addEventListener('click', () => {
    // post-click logic goes here!
    console.log(addOne.value)
    console.log(addTwo.value)
    console.log(Number(addOne.value) + Number(addTwo.value))
    sum.textContent = Number(addOne.value) + Number(addTwo.value)
})
buttonTwo.addEventListener('click', () => {
    // post-click logic goes here!
    console.log(subtractOne.value)
    console.log(subtractTwo.value)
    console.log(Number(subtractOne.value) - Number(subtractTwo.value))
    difference.textContent = Number(subtractOne.value) - Number(subtractTwo.value)
})
buttonThree.addEventListener('click', () => {
    // post-click logic goes here!
    console.log(multOne.value)
    console.log(multTwo.value)
    console.log(Number(multOne.value) * Number(multTwo.value))
    product.textContent = Number(multOne.value) * Number(multTwo.value)
})
buttonFour.addEventListener('click', () => {
    // post-click logic goes here!
    console.log(divOne.value)
    console.log(divTwo.value)
    console.log(Number(divOne.value) / Number(divTwo.value))
    quotient.textContent = Number(divOne.value) / Number(divTwo.value)
})

