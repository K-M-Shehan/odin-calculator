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
const secondScreen = document.querySelector("#operation-display");

const decimalPoint = document.querySelector("#dot");

let operand;
let operator;
let operand1;
let operand2;
let decimalSwitch = 0;  // only once

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

decimalPoint.addEventListener("click", () => {
  if(decimalSwitch == 0 && displayScreen.textContent != "") {
    incrementToDisplay(".");
    decimalSwitch = 1; // decimal point added
  }
})

function checkChaining() {
  if(displayScreen.textContent == "")
    return;
  if(operand1 == null && operand2 == null) {
    operand1 = parseFloat(displayScreen.textContent);
  }
  else if (operand1 != null && operand2 == null){
    operand2 = parseFloat(displayScreen.textContent);
    operand1 = operate(operand1, operand2, operator)
    operand2 = null;
  }
}

plus.addEventListener("click", () => {
  checkChaining();
  secondScreen.textContent = operand1;
  operator = "+"
  secondScreen.textContent = secondScreen.textContent + " " + operator;
  displayScreen.textContent = "";
  decimalSwitch = 0;
})

minus.addEventListener("click", () => {
  checkChaining();
  secondScreen.textContent = operand1;
  operator = "-";
  secondScreen.textContent = secondScreen.textContent + " " + operator;
  displayScreen.textContent = "";
  decimalSwitch = 0;
})

saltire.addEventListener("click", () => {
  checkChaining();
  secondScreen.textContent = operand1;
  operator = "*";
  secondScreen.textContent = secondScreen.textContent + " " + operator;
  displayScreen.textContent = "";
  decimalSwitch = 0;
})

obelus.addEventListener("click", () => {
  if(operand1 == null && operand2 == null) {
    operand1 = parseFloat(displayScreen.textContent);
  }
  else if (operand1 != null && operand2 == null){
    operand2 = parseFloat(displayScreen.textContent);
    if(operand2 == 0) {
      operand2 = null;
      secondScreen.textContent = "You have accidentally found the One Piece!";
      return
    }
    operand1 = operate(operand1, operand2, operator)
    operand2 = null;
  }
  secondScreen.textContent = operand1;
  operator = "/";
  secondScreen.textContent = secondScreen.textContent + " " + operator;
  displayScreen.textContent = "";
  decimalSwitch = 0;
})

equals.addEventListener("click", () => {
  if(displayScreen.textContent == "")
    return;
  operand2 = parseFloat(displayScreen.textContent);
  if(operand2 == 0 && operator == "/") {
    operand2 = null;
    secondScreen.textContent = "You have accidentally found the One Piece!";
    return
  }
  displayScreen.textContent = "";
  secondScreen.textContent = operate(operand1, operand2, operator);
  operand1 = null;
  operand2 = null;
  decimalSwitch = 0;
})

clear.addEventListener("click", () => {
  displayScreen.textContent = "";
  secondScreen.textContent = "";
  operand1 = null;
  operand2 = null;
  decimalSwitch = 0;
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
      return answer;
    case "-":
      answer = subtract(operand1, operand2);
      return answer;
    case "*":
      answer = multiply(operand1, operand2);
      return answer;
    case "/":
      answer = divide(operand1, operand2);
      return answer;
    default:
      console.log("Operation invalid\n");
    break;
  }
}
