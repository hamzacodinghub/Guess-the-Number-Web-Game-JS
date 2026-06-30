let userInp = document.querySelector("#user-inp")
let checkBtn = document.querySelector("#check-btn");
let resultMessage = document.querySelector("#result-message")
let attemptCount = document.querySelector("#attempts-count")
let count = 10;
let secretNumber = Math.floor(Math.random() * 100) + 1;

checkBtn.addEventListener('click', function () {
    let userguess = Number(userInp.value);
    if (userInp.value === "" || isNaN(userguess)) {
        resultMessage.textContent = "Please only enter Numbers"
        return;
    }
    else if (userguess > secretNumber && count > 0) {
        resultMessage.textContent = "Your answer is greater";
        count--;
        attemptCount.textContent = `Attempts Left: ${count}`;
    }
    else if (userguess < secretNumber && count > 0) {
        resultMessage.textContent = "Your answer is smaller"
        count--;
        attemptCount.textContent = `Attempts Left: ${count}`;
    }
    else if (userguess === secretNumber) {
        resultMessage.textContent = "Your answer is Right"
        return;
    }
    if (count === 0) {
        resultMessage.textContent = "Game Over ! You Lost."
        checkBtn.textContent = "Restart"
        checkBtn.addEventListener("click", function () {
            window.location.reload();
            return;
        })
    }
})