function timeDifference(time1, time2) {
    // Convert both times to milliseconds
    const time1_ms = new Date("1970-01-01T" + time1 + "Z").getTime();
    const time2_ms = new Date("1970-01-01T" + time2 + "Z").getTime();

    // Calculate the difference in milliseconds
    const difference_ms = Math.abs(time1_ms - time2_ms);

    // Convert back to hours, minutes, and seconds
    const hours = Math.floor(difference_ms / 3600000);
    const minutes = Math.floor((difference_ms % 3600000) / 60000);
    const seconds = Math.floor((difference_ms % 60000) / 1000);

    // Format the result as "hh:mm:ss"
    return tidFormat(hours, minutes, seconds);
}

function tidFormat(timer, minutter, sekunder) {
    let melding = '';
    if (timer > 0) {
        melding += timer > 1 ? `${timer} timer ` : `${timer} time `;
    }
    if (minutter > 0) {
        melding += minutter > 1 ? `${minutter} minutter ` : `${minutter} minutt `;
    }
    if (sekunder > 0) {
        melding += sekunder > 1 ? `${sekunder} sekunder ` : `${sekunder} sekund `;
    }
    return `Du var på jobb i ${melding}`;
}


document.getElementById("time-button").addEventListener("click", function () {

    const fromTime = document.getElementById("from").value;
    const toTime = document.getElementById("to").value;
    const difference = timeDifference(fromTime, toTime);


    const resultDiv = document.getElementById("result");
    resultDiv.textContent = difference;


});



