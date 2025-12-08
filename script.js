function add(a, b) {
    return a + b 
};

function subtract(a, b){
    return a - b
};

function multiply(a, b){
    return a*b
}

function divide (a, b) {
    return b===0 ? 'ERR, Not divisible by 0' : a/b
}

console.log(add(2,3))
console.log(multiply(3,0))
console.log(divide(3,0))