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

/*function operate(op, a, b){

}
*/
console.log(add(2,3))
console.log(multiply(3,0))
console.log(divide(3,0))

let currentInput = '';

//functions to populate the display with the digit numbers on click
const display = document.querySelector('.display')
const numsButton = document.querySelectorAll('.nums button');
numsButton.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        display.textContent = currentInput;
        display.scrollLeft = display.scrollWidth
    })
});


/* 
finished displaying. 
missing: 
-   storing the content of the display in a 
    variable for use in the next step

-   brand new css layout (old one sucked)
*/