let buttonSum = document.querySelector("#sum");
let buttonSub = document.querySelector("#sub");
let buttonMulti = document.querySelector("#multi");
let buttonDivi = document.querySelector("#divi");

let arrNumbers = []

let total = 0;

clearOperation();
checkFirstNumber();

function checkFirstNumber() {
    let ops = document.querySelectorAll(".button-op");
    ops.forEach(function(operation) {
        operation.addEventListener("click", function() {    
            let numberInput = document.querySelector("#input-num");    
            
            if (checkInputEmpty(numberInput)) {
                console.log("vazio");
                return;        
            } 
            if (arrNumbers.length == 0) {
                arrNumbers[0] = saveNumber(numberInput);
                console.log(`first ${arrNumbers[0]}`);
                clearInput();
            }
        })
    })
}

function saveNumber(number) {
    return number.value;    
}

function clearInput() {
    let numberInput = document.querySelector("#input-num");
    numberInput.value = '';    
}

function checkInputEmpty(input) {
    return input.value == '';
}

function clearOperation() {
    let clear = document.querySelector("#button-clear");
    clear.addEventListener("click", function() {
        arrNumbers = [];
        total = 0;        
        clearInput();
    })    
}