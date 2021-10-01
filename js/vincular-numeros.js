function vinculateNumberButton() {    
    let buttons = document.querySelectorAll(".button-num");
    let pre = document.querySelector("#preview");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            if (eraseBeforeNextInput) {
                console.log("before" + arrNumbers)
                clearInput();
                arrNumbers = [];
                pre.textContent += button.textContent;
                eraseBeforeNextInput = false;
                console.log("after" + arrNumbers)
            } else {
                pre.textContent += button.textContent;
            }
            
            
        })
    })
}

vinculateNumberButton();