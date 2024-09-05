function updateClock() {
    const clockDiv = document.getElementById('clock');
    let hoursDiv = document.getElementById('hours');
    let minutesDiv = document.getElementById('minutes');
    let secondsDiv = document.getElementById('seconds');

    if (!hoursDiv) {
        hoursDiv = document.createElement('div');
        hoursDiv.id = 'hours';
        clockDiv.appendChild(hoursDiv);
    }

    if (!minutesDiv) {
        minutesDiv = document.createElement('div');
        minutesDiv.id = 'minutes';
        clockDiv.appendChild(minutesDiv);
    }

    if (!secondsDiv) {
        secondsDiv = document.createElement('div');
        secondsDiv.id = 'seconds';
        clockDiv.appendChild(secondsDiv);
    }

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const version = document.getElementById('version-select').value;

    hoursDiv.innerHTML = getImagesForDigits(hours, version);
    minutesDiv.innerHTML = getImagesForDigits(minutes, version);
    secondsDiv.innerHTML = getImagesForDigits(seconds, version);
}

function getImagesForDigits(timeStr, version) {
    return timeStr
        .split('')
        .map(digit => `<img src="images/${version}/${digit}.png" alt="${digit}">`)
        .join('');
}

document.getElementById('version-select').addEventListener('change', updateClock);

setInterval(updateClock, 1000);
updateClock();