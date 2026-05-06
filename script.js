    let rightAnswer = 0;
function Correct() {
    rightAnswer = rightAnswer + 1;
}
function giveAnswer() {
    document.querySelector(".right").style.backgroundColor = "green"
    document.querySelector(".right1").style.backgroundColor = "green"
    document.querySelector(".right2").style.backgroundColor = "green"
    document.querySelector(".right3").style.backgroundColor = "green"
    document.querySelector(".amount").textContent = rightAnswer + "/4"
}