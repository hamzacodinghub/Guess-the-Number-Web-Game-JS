let userInp = document.querySelector("#user-inp")
let checkBtn = document.querySelector("#check-btn");
let resultMessage = document.querySelector("#result-message")
let secretNumber = Math.floor(Math.random() * 100) + 1;
checkBtn.addEventListener('click', function () {
    let userguess = Number(userInp.value);
    if (userguess == "") {
        resultMessage.textContent = "Please only enter numbers"
    }
    else if (userguess > secretNumber) {
        resultMessage.textContent = "Your answer is greater"
    }
    else if (userguess < secretNumber) {
        resultMessage.textContent = "Your answer is smaller"
    }
    else {
        resultMessage.textContent = "Your answer is Right"
    }
})