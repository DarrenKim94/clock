function showTime() {
    const d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds(); 
    let ampm = 'AM';
    
    if (hour > 12) {
        ampm = 'PM';
        hour = hour - 12;
    } 

    if (hour < 10) {
        hour = `0${hour}`
    }
    if (min < 10) {
        min = `0${min}`
    }
    if (sec < 10) {
        sec = `0${sec}`
    }
     
    document.getElementById('clock').innerHTML = `${hour}: ${min}: ${sec} ${ampm}`;

}


setInterval (showTime, 1000)