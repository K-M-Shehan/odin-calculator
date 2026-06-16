const num0 = document.querySelector("#num0");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");
const num4 = document.querySelector("#num4");
const num5 = document.querySelector("#num5");
const num6 = document.querySelector("#num6");
const num7 = document.querySelector("#num7");
const num8 = document.querySelector("#num8");
const num9 = document.querySelector("#num9");

const plus = document.querySelector("#add");
const minus = document.querySelector("#subtract");
const saltire = document.querySelector("#multiply");
const obelus = document.querySelector("#divide");
const equals = document.querySelector("#evaluate");

const clear = document.querySelector("#clear");

const displayScreen = document.querySelector("#display");

let operand;
let operator;
let operand1;
let operand2;

function incrementToDisplay(character) {
  let prev = displayScreen.textContent;
  let next = prev + character;  // would add the new character to the end of the string (since this is string concat)

  displayScreen.textContent = next;
}

// event listeners
num0.addEventListener("click", () => {
  incrementToDisplay("0");
})

num1.addEventListener("click", () => {
  incrementToDisplay("1");
})

num2.addEventListener("click", () => {
  incrementToDisplay("2");
})

num3.addEventListener("click", () => {
  incrementToDisplay("3");
})

num4.addEventListener("click", () => {
  incrementToDisplay("4");
})

num5.addEventListener("click", () => {
  incrementToDisplay("5");
})

num6.addEventListener("click", () => {
  incrementToDisplay("6");
})

num7.addEventListener("click", () => {
  incrementToDisplay("7");
})

num8.addEventListener("click", () => {
  incrementToDisplay("8");
})

num9.addEventListener("click", () => {
  incrementToDisplay("9");
})

plus.addEventListener("click", () => {
  operand = parseInt(displayScreen.textContent);
  operator = "+";
  displayScreen.textContent = "";
})

minus.addEventListener("click", () => {
  operand = parseInt(displayScreen.textContent);
  operator = "-";
  displayScreen.textContent = "";
})

saltire.addEventListener("click", () => {
  operand = parseInt(displayScreen.textContent);
  operator = "*";
  displayScreen.textContent = "";
})

obelus.addEventListener("click", () => {
  operand = parseInt(displayScreen.textContent);
  operator = "/";
  displayScreen.textContent = "";
})

equals.addEventListener("click", () => {
  operand1 = operand;
  operand2 = parseInt(displayScreen.textContent);
  displayScreen.textContent = "";
  operate(operand1, operand2, operator)
})

clear.addEventListener("click", () => {
  displayScreen.textContent = ""
})

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
      displayScreen.textContent = answer;
    break;
    case "-":
      answer = subtract(operand1, operand2);
      displayScreen.textContent = answer;
    break;
    case "*":
      answer = multiply(operand1, operand2);
      displayScreen.textContent = answer;
    break;
    case "/":
      answer = divide(operand1, operand2);
      displayScreen.textContent = answer;
    break;
    default:
      console.log("Operation invalid\n");
    break;
  }
}
