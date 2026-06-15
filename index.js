let operand1 = parseInt(prompt("Enter a number"));
let operator = prompt("Enter an operator");
let operand2 = parseInt(prompt("Enter a number"));

function add(operand1, operand2) {
  return operand1 + operand2;
}

function subtract(operand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  return operand1 / operand2;
}

function operate(operand1, operand2, operator) {
  let answer = 0;
  switch (operator) {
    case "+":
      answer = add(operand1, operand2);
      console.log(answer);
    break;
    case "-":
      answer = subtract(operand1, operand2);
      console.log(answer);
    break;
    case "*":
      answer = multiply(operand1, operand2);
      console.log(answer);
    break;
    case "/":
      answer = divide(operand1, operand2);
      console.log(answer);
    break;
    default:
      console.log("Operation invalid\n");
    break;
  }
}

operate(operand1, operand2, operator);
