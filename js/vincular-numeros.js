function vinculateNumberButton() {
    let result = document.querySelector("#input-num");
    let buttons = document.querySelectorAll(".button-num");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            result.value += button.textContent;
        })
    })
}

vinculateNumberButton();