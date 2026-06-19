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

const backSpace = document.querySelector("#backspc");

let operator;

let operand1;
let operand2;

let decimalSwitch = 0;  // only once

function incrementToDisplay(character) {
  let prev = displayScreen.textContent;
  let next = prev + character;  // would add the new character to the end of the string (since this is string concat)

  displayScreen.textContent = next;
}

// keyboard input
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "0":
      incrementToDisplay("0");
      break;
    case "1":
      incrementToDisplay("1");
      break;
    case "2":
      incrementToDisplay("2");
      break;
    case "3":
      incrementToDisplay("3");
      break;
    case "4":
      incrementToDisplay("4");
      break;
    case "5":
      incrementToDisplay("5");
      break;
    case "6":
      incrementToDisplay("6");
      break;
    case "7":
      incrementToDisplay("7");
      break;
    case "8":
      incrementToDisplay("8");
      break;
    case "9":
      incrementToDisplay("9");
      break;
    case "+":
      plusEvent();
      break;
    case "-":
      minusEvent();
      break;
    case "*":
      mulEvent();
      break;
    case "/":
      divEvent();
      break;
    case "Enter":
    case "=":
      evaluation();
      break;
    case "Escape":
      clearingScreen();
      break;
    case "Backspace":
      backSpaceEvent();
      break;
    case ".":
      decimalEvent();
      break;
  }
});

// button event listeners
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
  decimalEvent();
})

backSpace.addEventListener("click", () => {
  backSpaceEvent();
})

plus.addEventListener("click", () => {
  plusEvent();
})

minus.addEventListener("click", () => {
  minusEvent();
})

saltire.addEventListener("click", () => {
  mulEvent();
})

obelus.addEventListener("click", () => {
  divEvent();
})

equals.addEventListener("click", () => {
  evaluation();
})

clear.addEventListener("click", () => {
  clearingScreen();
})

// event logic
function decimalEvent() {
   if(decimalSwitch == 0 && displayScreen.textContent != "") {
    incrementToDisplay(".");
    decimalSwitch = 1; // decimal point added
  }
}

function backSpaceEvent() {
  if(displayScreen.textContent.at(-1) == ".") {   // why can't js be normal for once and let me do it like this displayScreen.textContent[-1]
    decimalSwitch = 0;    // this would reset the decimal switch if it was deleted
  }
  displayScreen.textContent = displayScreen.textContent.slice(0, -1); // removes just the last character in the string 
}

function checkChaining() {    // supporting function to event logic for operators
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
  secondScreen.textContent = operand1;
}

function evalToSecondDis() {    // supporting function to event logic for operators
  secondScreen.textContent = secondScreen.textContent + " " + operator;
  displayScreen.textContent = "";
  decimalSwitch = 0;
}

function plusEvent() {
  checkChaining();
  operator = "+"
  evalToSecondDis();
}

function minusEvent() {
  checkChaining();
  operator = "-";
  evalToSecondDis();
}

function mulEvent() {
  checkChaining();
  operator = "*";
  evalToSecondDis();
}

function divEvent() {
  if(operand1 == null && operand2 == null) {
    operand1 = parseFloat(displayScreen.textContent);
  }
  else if (operand1 != null && operand2 == null){
    operand2 = parseFloat(displayScreen.textContent);
    if(operand2 == 0) {   // for the case when user divides by 0 during a chain
      operand2 = null;
      secondScreen.textContent = "You have accidentally found the One Piece!";
      return
    }
    operand1 = operate(operand1, operand2, operator)
    operand2 = null;
  }
  secondScreen.textContent = operand1;
  operator = "/";
  evalToSecondDis();
}

// final evaluation
function evaluation() {
  if(displayScreen.textContent == "")
    return;
  operand2 = parseFloat(displayScreen.textContent);
  if(operand2 == 0 && operator == "/") {  // for when user divides by 0 but within the first pair
    operand2 = null;
    secondScreen.textContent = "You have accidentally found the One Piece!";
    return
  }
  displayScreen.textContent = "";
  secondScreen.textContent = operate(operand1, operand2, operator);
  operand1 = null;
  operand2 = null;
  decimalSwitch = 0;
}

// clears both displays and memory (clean slate)
function clearingScreen() {
  displayScreen.textContent = "";
  secondScreen.textContent = "";
  operand1 = null;
  operand2 = null;
  decimalSwitch = 0;
}

// main logic
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
