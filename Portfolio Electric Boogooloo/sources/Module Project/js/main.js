import updateMadLib from './jsMods/stringMod.js';
import refLib from './jsMods/varLibrary.js';
import updateLoopDisplay from './jsMods/produceLoop.js';
import updateObjectDisplay from './jsMods/produceObject.js';
import displayArray from './jsMods/produceArray.js';
import accordianControl from './jsMods/accordianControl.js';
import navControl from './jsMods/navControl.js';
import Calculator from './jsMods/numbersAssign.js';
import formValidation from './jsMods/formVal.js';
import cookieControl from './jsMods/cookieAssignment.js';
import pluginDisplayFunc from './jsMods/pluginDisplay.js';


//Calculator button assignments
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

//create and save the calculator status for use
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

//madlib, array, and object assignments
const madLib = refLib.madLib;
const produce = refLib.produce;
const detailedProduceList = refLib.detailedProduceList;

const form = document.querySelector('#signup');

function cookieButton(){
    document.querySelectorAll('.cookieButton').forEach((item)=>{
        item.addEventListener('click',(event)=>{cookieControl(event.target.value)})
       });
}


$(document).ready(function(){

  //array controls
  displayArray(produce, document.getElementById('loopDisplay'));
  //madlib controls
  document.getElementById("madLibDisplay").innerHTML = madLib;
  document.getElementById('madLibBTN').addEventListener('click', updateMadLib);
  // loop and object controls
  document.getElementById('decBTN').addEventListener('click',()=>{updateLoopDisplay('Declarative')});
  document.getElementById('impBTN').addEventListener('click',()=>{updateLoopDisplay('Imperative')});
  document.getElementById('objBTN').addEventListener('click',()=>{updateObjectDisplay("Objects")});
  //nav and accordian controls
  $(".accordianControl").click((item)=>{accordianControl(item)});
  document.getElementById("navControl").addEventListener('click', navControl)
  //calculator controls made accessible to html
  numberButtons.forEach(button => {
      button.addEventListener("click", () => {
          calculator.appendNumber(button.innerText)
          calculator.updateDisplay()
      })
  })
  operationButtons.forEach(button => {
      button.addEventListener("click", () => {
          calculator.chooseOperation(button.innerText)
          calculator.updateDisplay()
      })
  })
  equalsButton.addEventListener("click", button => {
      calculator.compute()
      calculator.updateDisplay()
  })
  allClearButton.addEventListener("click", button => {
      calculator.clear()
      calculator.updateDisplay()
  })
  deleteButton.addEventListener("click", button => {
      calculator.delete()
      calculator.updateDisplay()
  })
  document.getElementById('signup').addEventListener('keypress', (event)=>{formValidation('keypress', event)})
  document.getElementById('formBTN').addEventListener('click', (event)=>{formValidation('click', event)})


  cookieButton();

  pluginDisplayFunc('pluginDisplay')


  });

