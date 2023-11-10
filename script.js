const hour = document.getElementById('hour');
const minuts = document.getElementById('minuts');
const seconds = document.getElementById('seconds');

const watch = setInterval (function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    /*----- OR -----*/

    /* Format hours, minutes, and seconds with leading zeros
    const formattedHour = hr.toString().padStart(2, "0");
    const formattedMin = min.toString().padStart(2, "0");
    const formattedSec = sec.toString().padStart(2, "0");
    
    /* hr.toString(): The hr variable contains the hour as a number (e.g., 1, 2, 10, etc.). To format it as a string, we use the toString() method. This converts the numeric hour value into a string representation.

    .padStart(2, "0"): After converting the numeric hour into a string, the padStart() method is used to ensure that the resulting string is at least 2 characters long. If the string is less than 2 characters in length, it pads the string with leading zeros (the second argument, "0") to make it 2 characters long.*/

    hour.textContent = hr;
    minuts.textContent = min;
    seconds.textContent = sec;

    
})