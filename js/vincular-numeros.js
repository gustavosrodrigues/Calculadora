// Vincula cada botão com seus respectivos números e salva o valor
function vinculateNumberButton() {    
    let buttons = document.querySelectorAll(".button-num");
    let pre = document.querySelector("#preview");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            if (eraseBeforeNextInput) { //checa se o resultado deve ser apagado antes do input do usuário                
                clearInput();
                emptyArray(); //reinicia o array de operações                
                pre.textContent += button.textContent; 
                eraseBeforeNextInput = false; //depois que o usuário interagiu uma vez, não apaga mais
            } else {
                pre.textContent += button.textContent; //insere o valor do botão continuamente
            }
        })
    })
}

vinculateNumberButton();