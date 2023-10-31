function timeDifference(time1, time2) {
    // Convert both times to milliseconds
    var time1_ms = new Date("1970-01-01T" + time1 + "Z").getTime();
    var time2_ms = new Date("1970-01-01T" + time2 + "Z").getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(time1_ms - time2_ms);

    // Convert back to hours, minutes, and seconds
    var hours = Math.floor(difference_ms / 3600000);
    var minutes = Math.floor((difference_ms % 3600000) / 60000);
    var seconds = Math.floor((difference_ms % 60000) / 1000);

    // Format the result as "hh:mm:ss"
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}


document.getElementById("time-button").addEventListener("click", function () {

    const fromTime = document.getElementById("from").value;
    const toTime = document.getElementById("to").value;
    let difference = timeDifference(fromTime, toTime);


    let resultDiv = document.getElementById("result");
    resultDiv.textContent = "Time difference: " + difference;


});



