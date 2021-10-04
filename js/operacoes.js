//recuperando informações dos botões de operações
let buttonSum = document.querySelector("#sum");
let buttonSub = document.querySelector("#sub");
let buttonMulti = document.querySelector("#multi");
let buttonDivi = document.querySelector("#divi");

//input que irá mostrar o resultado das operações
let results = document.querySelector("#input-num");

let operationsArray = []; //array que irá guardar as operações de 2 números por vez - e.g., n + n
let eraseBeforeNextInput = false; //checa se o valor exibido no input precisa ser apagado antes de exibir um novo número
let selectedNumber = 0; //Valor que o usuário escolhe em cada operação
const emptyArray = () => {
    operationsArray = [];
};

sumOperation();
subOperation();
multiOperation();
diviOperation();

//Função que monta a operação e calcula a soma de 2 números
function sumOperation() {
    buttonSum.addEventListener("click", function() {
        operationConstructor("+");        
    })    
}

//Função que monta a operação e calcula a subtração de 2 números
function subOperation() {
    buttonSub.addEventListener("click", function() {
        operationConstructor("-");       
    })    
}

//Função que monta a operação e calcula a multiplicação de 2 números
function multiOperation() {
    buttonMulti.addEventListener("click", function() {
        operationConstructor("*");        
    })    
}

//Função que monta a operação e calcula a divisão de 2 números
function diviOperation() {
    buttonDivi.addEventListener("click", function() {        
        operationConstructor("/");
    })    
}

//Função que monta as operações matemáticas entre 2 números
function operationConstructor(operator) {
    let pre = document.querySelector("#preview"); //Recupera o input do usuário
        if (isFirstNumberIn(pre)) return; //Retorna caso não tenha input do usuário ou o array esteja vazio 
        if (operationsArray.length == 0) {
            //add o primeiro valor e o operador no array
            addSelectedNumber(pre);
            addOperator(operator)
            eraseStoredNumber(pre);
        } else if (operationsArray.length == 1){
            //add o operador no array
            addOperator(operator);
            clearInput();
            eraseBeforeNextInput = false;
        } else {
            if (pre.textContent == "") { //checa se existe input do usuário
                console.log("Entrei naquele erro maldito");
                return;
            }
            //add o segundo valor, resolve a operação, add o reultado e o operador no array
            addSelectedNumber(pre);
            finishOperation(); 
            addOperator(operator);
            eraseStoredNumber(pre);
        }
}
//Função que recupera o input do usuário e add no array
function addSelectedNumber(preview) { 
    selectedNumber = preview.textContent;
    operationsArray.push(selectedNumber);
}

//Função que add o operador no array
function addOperator(operation) {
    operationsArray.push(operation);
}

//Função que recupera o resultado da operação, exibe na tela e add ao array
function finishOperation() {
    let calculatedNumbers = getResults();            
    results.value = calculatedNumbers;
    emptyArray(); //reinicia o array de operações     
    operationsArray.push(calculatedNumbers);
}

//Função que apaga o registro no valor do input
function eraseStoredNumber(preview) {
    preview.textContent = "";
}

function isFirstNumberIn(preview) {    
    return preview.textContent === "" && results.value === "";    
}

//realiza as operação para cada 2 números, de acordo com o operador escolhido
function getResults() {
    const operador = operationsArray[1];
    let firstNumber = operationsArray[0];
    let secondNumber = operationsArray[2];
    switch(operador) {// De acordo com o operador que o array contém, faz a operação
        case '+':            
            return Math.round((parseInt(firstNumber) + parseInt(secondNumber)) * 100) / 100;
        case '-':
            return Math.round((parseInt(firstNumber) - parseInt(secondNumber)) * 100) / 100;
        case '*':
            return Math.round((parseInt(firstNumber) * parseInt(secondNumber)) * 100) / 100;
        case '/':
            if (secondNumber == 0) return 0;
            return Math.round((parseInt(firstNumber) / parseInt(secondNumber)) * 100) / 100;    
    }  
}

//Função para limpar os valores do input do usuário e o resultado na tela
function clearInput() {    
    let pre = document.querySelector("#preview");    
    pre.textContent = '';    
    results.value = '';    
}
