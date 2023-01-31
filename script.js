const hourText = document.getElementById('hour');
const minText = document.getElementById('min');
const secText = document.getElementById('sec');
let secCount = 45;
let timer = setInterval(timeChange, 1000);
let minCount = 59;
let hourCount = 11;

function timeChange() {
    secCount += 1;
    secText.innerHTML = secCount;
    if (secCount === 60) {
        secCount = 0;
        minCount += 1;
        minText.innerHTML = minCount;
    }
    if (secCount < 10) {
        secText.innerHTML = `:0 ${secCount}`
    } else{
        secText.innerHTML = `: ${secCount}`
    }

    if (minCount === 60) {
        hourCount += 1;
        minCount = 0;
        hourText.innerHTML = hourCount;
    }

    if (minCount < 10) {
        minText.innerHTML = `0 ${minCount}`
    }

    if (hourCount > 12) {
        hourCount = 1;
        hourText.innerHTML = hourCount;
    } if (hourCount < 10) {
        hourText.innerHTML = `0 ${hourCount}:`
    } else{
        hourText.innerHTML = `${hourCount} :`
    }
}


