// Encerra a operação em andamento
function clearOperationButton() {
    let clear = document.querySelector("#button-clear");
    clear.addEventListener("click", function() {        
        emptyArray();
        clearInput();
    })    
}

function equalsButton() {
    let equals = document.querySelector("#button-equals");
    equals.addEventListener("click", function() {
        let pre = document.querySelector("#preview");
        if (isFirstNumberIn(pre) || pre.textContent == "") return; // Retorna caso não tenha input do usuário, array esteja vazio ou tenha somente 1 valor
        if (operationsArray.length == 2) {
            addSelectedNumber(pre); //add o terceiro valor no array
            finishOperation();
            eraseStoredNumber(pre); //limpa o input do usuário armazenado
            eraseBeforeNextInput = true; //antes do próximo input do usuário, o resultado deve ser apagado            
        } else {
            return;
        }
    })
}

clearOperationButton();
equalsButton();