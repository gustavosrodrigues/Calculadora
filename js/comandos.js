function clearOperationButton() {
    let clear = document.querySelector("#button-clear");
    clear.addEventListener("click", function() {        
        arrNumbers = [];        
        clearInput();        
    })    
}

function equalsButton() {
    let equals = document.querySelector("#button-equals");
    equals.addEventListener("click", function() {
        let pre = document.querySelector("#preview");
        if (checkOperationInvalid(pre) || pre.textContent == "") return;        
        if (arrNumbers.length == 2) {
            arrNumbers.push(pre.textContent);
            finishOperation();
            eraseStoredNumber(pre);
            eraseBeforeNextInput = true;
            console.log(arrNumbers);
        } else {
            return;
        }
    })
}

clearOperationButton();
equalsButton();