//create a simple calculator

let result;//declaration
let num1 = 10
let num2 = 2
let operator = ':)'

switch (operator) {
    case '+':
        result = num1 + num2
        console.log(`${num1} + ${num2} = ${result}`)
        break;
    case '-':
        result = num1 - num2
        console.log(`${num1} - ${num2} = ${result}`)
        break;
    case '*':
        result = num1 * num2
        console.log(`${num1} * ${num2} = ${result}`)
        break;
    case '/':
        result = num1 / num2
        console.log(`${num1} / ${num2} = ${result}`)
        break;
    default:
        console.log('Invalid operation')
}