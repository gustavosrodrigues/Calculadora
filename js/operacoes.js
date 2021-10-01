let buttonSum = document.querySelector("#sum");
let buttonSub = document.querySelector("#sub");
let buttonMulti = document.querySelector("#multi");
let buttonDivi = document.querySelector("#divi");
let numberInput = document.querySelector("#input-num");

let arrNumbers = [];
let eraseBeforeNextInput = false;
let selectedNumber = 0;

sumOperation();
subOperation();
multiOperation();
diviOperation();

function sumOperation() {
    buttonSum.addEventListener("click", function() {
        operationConstructor("+");        
    })    
}

function subOperation() {
    buttonSub.addEventListener("click", function() {
        operationConstructor("-");       
    })    
}

function multiOperation() {
    buttonMulti.addEventListener("click", function() {
        operationConstructor("*");        
    })    
}

function diviOperation() {
    buttonDivi.addEventListener("click", function() {        
        operationConstructor("/");
    })    
}

function operationConstructor(operator) {
    let pre = document.querySelector("#preview");
        if (checkOperationInvalid(pre)) return;        
        if (arrNumbers.length == 0) {
            addSelectedNumber(pre);
            addOperator(operator)
            eraseStoredNumber(pre);
        } else if (arrNumbers.length == 1){
            addOperator(operator);
            clearInput();
            eraseBeforeNextInput = false;
        } else {
            if (pre.textContent == "") {
                console.log("Entrei naquele erro maldito");
                return;
            }
            addSelectedNumber(pre);
            finishOperation();
            addOperator(operator);
            eraseStoredNumber(pre);
        }
}

function addSelectedNumber(preview) { 
    selectedNumber = preview.textContent;
    arrNumbers.push(selectedNumber);        
}

function addOperator(operation) {
    arrNumbers.push(operation);
}

function finishOperation() {
    let calculatedNumbers = getResultado();            
    numberInput.value = calculatedNumbers;
    arrNumbers = [];            
    arrNumbers.push(calculatedNumbers);
}

function eraseStoredNumber(preview) {
    preview.textContent = "";
}

function checkOperationInvalid(preview) {
    console.log(preview.textContent === "" && numberInput.value === "");
    return preview.textContent === "" && numberInput.value === "";
    
}

function getResultado() {    
    let r = eval(arrNumbers.join(""));
    if (r == "Infinity"){
        return 0;
    } else {
        return r;
    }    
}

function clearInput() {    
    let pre = document.querySelector("#preview");    
    pre.textContent = '';    
    numberInput.value = '';    
}
