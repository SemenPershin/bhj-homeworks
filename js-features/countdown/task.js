const timer = document.getElementById("timer");
const linkToDownload = document.getElementById("link_to_download");

let counter = Number(timer.textContent);
let hours = 0;
let minutes = 0;
let seconds = counter;

if (counter >= 60) {
    seconds = counter % 60;
    minutes = Math.floor(counter / 60);
    if (minutes >= 60) {
        hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
        
    }
}

if (String(seconds).length < 2) {
    secondsString = "0" + seconds;
} else {
    secondsString = String(seconds);
}

if (String(minutes).length < 2) {
    minutesString = "0" + minutes;
} else {
    minutesString = String(minutes);
}

if (String(hours).length < 2) {
    hoursString = "0" + hours;
} else {
    hoursString = String(hours);
}

timer.textContent = hoursString + ":" + minutesString + ":" + secondsString;

let interval = setInterval( function() {
    seconds--;
    
    if (seconds < 0 && minutes > 0) {
        seconds = 59;
        minutes--;
    }
    if (seconds < 0 && minutes <= 0 && hours > 0) {
        seconds = 59;
        minutes = 59;
        hours--;
    }
    String(seconds).length < 2 ? secondsString = `0${seconds}` : secondsString = String(seconds);
    String(minutes).length < 2 ? minutesString = `0${minutes}` : minutesString = String(minutes);
    String(hours).length < 2 ? hoursString = `0${hours}` : hoursString = String(hours);
    timer.textContent = hoursString + ":" + minutesString + ":" + secondsString;
    if (seconds == 0 && minutes == 0 && hours == 0) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
        linkToDownload.click();
    }}
    , 1000);

