const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const speedCounter = document.getElementById("speed__counter");

let counter = 0;
let flag = true;

cookie.onclick = function () {
    if (typeof timeFirstClick != 'undefined') {
        timeSecondClick = new Date().getTime() / 1000;
        speedCounter.textContent = (1 / (timeSecondClick - timeFirstClick)).toFixed(2);
    }

    timeFirstClick = new Date().getTime() / 1000;

    counter++;
    clickerCounter.textContent = counter;

    if (flag) {
        cookie.width = 150;
        flag = !flag;
    } else {
        cookie.width = 200;
        flag = !flag;
    }
}
