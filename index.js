var dayElem = document.querySelector('#days')
var hourElem = document.querySelector('#hours')
var minuteElem = document.querySelector('#minutes')
var secondElem = document.querySelector('#seconds')


function countDown() {

    const newYear = document.querySelector("#dateinput").value;
    const event = document.querySelector('#event').value;
    const head = document.querySelector('h1')
    head.innerHTML = `${event} is coming in...`
    const newYearsDate = new Date(newYear);
    const currentdate = new Date();

    var totalSeconds = (newYearsDate - currentdate) / 1000;

    var days = Math.floor(totalSeconds / 3600 / 24);
    var hours = Math.floor(totalSeconds / 3600) % 24;
    var minutes = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds) % 60;

    dayElem.innerHTML = formateDate(days);
    hourElem.innerHTML = formateDate(hours);
    minuteElem.innerHTML = formateDate(minutes);
    secondElem.innerHTML = formateDate(seconds);

}
countDown();

function formateDate(time) {
    if (time < 10) {
        return `0${time}`;
    }
    else {
        return time;
    }
}

setInterval(countDown, 1000);