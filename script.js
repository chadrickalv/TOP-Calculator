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
            return b===0 ? 'ERR' : a/b    
    }
}

let currentInput = '';
let firstNumber = null;
let operator = null;
let result = null;

//functions to populate the display with the digit numbers on click
const display = document.querySelector('.display')
const numsButton = document.querySelectorAll('.nums button:not(.equals):not(.period)');
numsButton.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '' || currentInput === '0'){
            currentInput = button.textContent //replace the 0
        }  else {
            currentInput += button.textContent; //append numbers normally
        }
        display.textContent = currentInput;
        display.scrollLeft = display.scrollWidth
    })
});

//decimal logic
const decimal = document.querySelector('.period')
decimal.addEventListener('click', () => {
    if (currentInput.includes('.')){
        return
    } else if (currentInput == '' || currentInput == '0'){
        currentInput = '0.';
    } else {
        currentInput += '.'
    }
    display.textContent = currentInput;
    display.scrollLeft = display.scrollWidth;
})


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
        if (firstNumber === null || operator === null || currentInput === ''){
            return
        }
        secondNumber = parseFloat(currentInput)
        result = operate(firstNumber, secondNumber, operator)
        currentInput = result;
        display.textContent = result;
})




//clear button logic
const clearButton = document.querySelector('.clear');
let lastClickTime = 0;
const doubleTap = 300;

clearButton.addEventListener('click', () => {
    const now = Date.now();

    if (now - lastClickTime < doubleTap){
    firstNumber = null;
    operator = null;
    currentInput = '';
    result = null;
    display.textContent = '0';
    } else {
        if(currentInput.length > 0) {
            currentInput = currentInput.slice(0,-1);
            display.textContent = currentInput || '0';
        }
    }
    lastClickTime = now;
});


//Keyboard interactive

document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (!isNaN(key)) {
        if (currentInput === '' || currentInput === '0'){
            currentInput = key;
        } else {
            currentInput += key;
        }
        display.textContent = currentInput;

// operators
    } else if (['+', '-', '*', '/'].includes(key)) {
        if (firstNumber === null) {
            firstNumber = parseFloat(currentInput);
            operator = key;
            currentInput = '';
        } else if (currentInput !== '') {
            secondNumber = parseFloat(currentInput);
            result = operate(firstNumber, secondNumber, operator);
            firstNumber = result;
            operator = key;
            currentInput = '';
            display.textContent = firstNumber;
        } else {
            operator = key
        }

// decimal
    } else if (key === '.') {
        if (currentInput.includes('.')){
        return
        } else if (currentInput == '' || currentInput == '0') {
        currentInput = '0.';
        } else {
        currentInput += '.'
        }
        display.textContent = currentInput;
        display.scrollLeft = display.scrollWidth;

// equals
    } else if (key === 'Enter') {
        if (firstNumber === null || operator === null || currentInput === ''){
            return
        }
            secondNumber = parseFloat(currentInput);
            result = operate(firstNumber, secondNumber, operator);
            firstNumber = result;
            currentInput = ''
            display.textContent = result;


// clear
    } else if (key === 'Backspace') {
        const now = Date.now();

    if (now - lastClickTime < doubleTap){
    firstNumber = null;
    operator = null;
    currentInput = '';
    result = null;
    display.textContent = '0';
    } else {
        if (currentInput.length > 0) {
            currentInput = currentInput.slice(0 , -1);
            display.textContent = currentInput || '0';
        }
    }
    lastClickTime = now;

    e.preventDefault();
    }
});