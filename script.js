const hourText = document.getElementById('hour');
const minText = document.getElementById('min');
const secText = document.getElementById('sec');
let secCount = 0;
let changeSec = setInterval(secChange, 1000)
let minCount = 0;
let changeMin = setInterval(MinChange, 60000)

function secChange() {
    secCount += 1;
    secText.innerHTML = secCount;
    if (secCount === 60) {
        clearInterval(changeSec);
        secCount= 0;
        setInterval(secChange, 1000);
    }
}
function minChange() {
    minCount += 1;
    minText.innerHTML = minCount;
    if (minCount === 60) {
        clearInterval(changeMin);
        minCount= 0;
        setInterval(minChange, 1000);
    }
}

// function secChange() {
//     secCount += 1;
//     secText.innerHTML = secCount;
//     if (secCount === 60) {
//         clearInterval(changeSec);
//         secCount= 0;
//         setInterval(secChange, 1000);
//     }
// }


