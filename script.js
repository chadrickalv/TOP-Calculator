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
    switch (op){
        case '+': 
           return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b===0 ? 'ERR, Not divisible by 0' : a/b    
    }
}


let currentInput = '';
let firstNumber = null;
let operator = null;
let result = null;

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


const symbolsButton = document.querySelectorAll('.symbols button')
symbolsButton.forEach(symbolsbtn => {
    symbolsbtn.addEventListener('click', () => {
        if (firstNumber == null){
        firstNumber = parseFloat(currentInput)
        operator = symbolsbtn.textContent
        currentInput = ''
        } else if (firstNumber !== null){
            secondNumber = parseFloat(currentInput)
            result = operate(firstNumber, secondNumber, operator)
            firstNumber = result
            operator = symbolsbtn.textContent
            currentInput = ''
            display.textContent = firstNumber
        }
    })
})



const equalsButton = document.querySelector('.equals')
equalsButton.addEventListener('click', () => {

        secondNumber = parseFloat(currentInput)
        result = operate(firstNumber, secondNumber, operator)
        currentInput = result;
        display.textContent = result;
        display.scrollLeft = display.scrollWidth
})




//clear button logic
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    firstNumber = null;
    operator = null;
    currentInput = '';
    result = null;
    display.textContent = '0';
});


/* logic to make the display into string 
inputs of numbers which will then all be combined when 
'=' is pressed (input: 1+1+1+1; press -> '='; output: 4;)

const symbolsButton = document.querySelectorAll('.symbols button')
symbolsButton.forEach(symbolsbtn => {
    symbolsbtn.addEventListener('click', () => {
        if (firstNumber == null){
        firstNumber = currentInput
        operator = symbolsbtn.textContent
        currentInput = ''
        display.textContent += symbolsbtn.textContent
        } else if (firstNumber !== null){
            secondNumber = currentInput
            operator = symbolsbtn.textContent
            currentInput = ''
            display.textContent += symbolsbtn.textContent
        } 
    })
})

*/

/* 
added variable content holder
missing: 
-   operator functionality

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

const browser = ''
if (browser === 'Edge'){
    console.log("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera'){
     console.log('Okay we support these browsers too.')//you can also use 'alert' instead of console.log
} else {
    console.log('We hope that this page looks ok!')
}


let a = +prompt('a?', '');

switch(a) {
case 0:
    alert( 0 );
    break;
case 1:
    alert ( 1 );
    break;
case 2:
case 3:
    alert ( '2,3' );
    break;
}
*/