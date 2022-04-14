'use strict'

const zeroButton = document.getElementById("0");
const oneButton = document.getElementById("1");
const twoButton = document.getElementById("2");
const threeButton = document.getElementById("3");
const fourButton = document.getElementById("4");
const fiveButton = document.getElementById("5");
const sixButton = document.getElementById("6");
const sevenButton = document.getElementById("7");
const eightButton = document.getElementById("8");
const nineButton = document.getElementById("9");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");
const result = document.getElementById("result");

let stringSum = "";

const appendCharacter = (character) => {
    if(stringSum.length < 8) {
        stringSum += character;
        result.textContent = stringSum;
    }
}

const calculateResult = () => {
    let answer = eval(stringSum);
    result.textContent = answer;
    stringSum = "";
}

zeroButton.addEventListener("click", function(){appendCharacter("0")});
oneButton.addEventListener("click", function(){appendCharacter("1")});
twoButton.addEventListener("click", function(){appendCharacter("2")});
threeButton.addEventListener("click", function(){appendCharacter("3")});
fourButton.addEventListener("click", function(){appendCharacter("4")});
fiveButton.addEventListener("click", function(){appendCharacter("5")});
sixButton.addEventListener("click", function(){appendCharacter("6")});
sevenButton.addEventListener("click", function(){appendCharacter("7")});
eightButton.addEventListener("click", function(){appendCharacter("8")});
nineButton.addEventListener("click", function(){appendCharacter("9")});

plusButton.addEventListener("click", function(){appendCharacter("+")});
minusButton.addEventListener("click", function(){appendCharacter("-")});
multiplyButton.addEventListener("click", function(){appendCharacter("*")});
divideButton.addEventListener("click", function(){appendCharacter("/")});

equalsButton.addEventListener("click", calculateResult);