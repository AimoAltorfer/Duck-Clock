function updateClock() {
    const hoursDiv = document.getElementById('hours');
    const minutesDiv = document.getElementById('minutes');
    const secondsDiv = document.getElementById('seconds');

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    hoursDiv.innerHTML = getImagesForDigits(hours);
    minutesDiv.innerHTML = getImagesForDigits(minutes);
    secondsDiv.innerHTML = getImagesForDigits(seconds);
}

function getImagesForDigits(timeStr) {
    return timeStr
        .split('')
        .map(digit => `<img src="images/${digit}.png" alt="${digit}">`)
        .join('');
}

setInterval(updateClock, 1000);
updateClock();
