const currentTimeElement = document.getElementById("current_time");
const currentDayElement = document.getElementById("current_day");

let currentTime = new Date();

function showTime() {
    currentTimeElement.innerHTML = "Current Time: " +  new Date().toTimeString().split(' ')[0];
}
currentDayElement.innerHTML += currentTime.toDateString().split(' ')[0];

setInterval(showTime, 1000)
