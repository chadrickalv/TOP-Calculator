function add(a, b) {
    return a + b 
};

function subtract(a, b){
    return a - b
};

function multiply(a, b){
    return a * b
}

function divide (a, b) {
    return b===0 ? 'ERR, Not divisible by 0' : a/b
}


console.log(add(2,3))
console.log(multiply(3,0))
console.log(divide(3,0))

//function that will be called when the user clicks on '='
function operate (a, b, op) {

}

let currentInput = '';

//functions to populate the display with the digit numbers on click
const display = document.querySelector('.display')
const numsButton = document.querySelectorAll('.nums button:not(.equals)');
numsButton.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '' || currentInput === '0'){
            currentInput = button.textContent //replace the 0
        } else {
            currentInput += button.textContent; //append numbers normally
        }
        display.textContent = currentInput;
        display.scrollLeft = display.scrollWidth
    })
});





//clear button logic
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    firstNumber = null;
    operators = null;
    currentInput = '';
    result = null;
    display.textContent = '0';
});




/* 
added variable content holder
missing: 
-   operator functionality


*/