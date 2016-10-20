document.addEventListener("DOMContentLoaded", function() {

    var container = document.querySelector(".container");
    var viewportHeight = document.documentElement.clientHeight;
    var span = document.querySelector("#clock");
    var intervalSeconds = window.setInterval(updateTime, 100, span);

    // document.requestFullscreen();
    document.querySelector("#hour-format").addEventListener("click", changeFormat);
    document.querySelector("#show-seconds").addEventListener("click", toggleSeconds);
    document.querySelector("#add-remove").addEventListener("click", toggleZero);
    document.querySelector("#cancel").addEventListener("click", toggle);

});

var timeFormat = {
    hour12: true,
    leadZero: true,
    showSeconds: true
}

// function mulitpleEL(input, id, task) {
//     for (inputs in input) {
//         document.querySelector(id).addEventListener(input, task);
//     }
// }

// multipleEL(["click", "keypress"], "#hour-format", changeFormat(e));
// multipleEL(["click", "keypress"], "#show-seconds", toggleSeconds(e));
// multipleEL(["click", "keypress"], "#add-remove", toggleZero(e));
// multipleEL(["click", "keypress"], "#cancel", toggle(e));

function updateTime(span) {
    var date = new Date;
    date = date.toLocaleTimeString(timeFormat.type, timeFormat);
    if (timeFormat.leadZero) {
        date = (date.charAt(1) === ":" ?  "0" : "") + date;
        date = date.substring(0, 8);
    } else {
        date = date.substring(0, 7);
    } if (!timeFormat.showSeconds) {
        date = date.substring(0, date.length - 3);
    }
    span.textContent = date;
}

function changeFormat () {

        console.log("ran events");
        timeFormat.hour12 = !timeFormat.hour12;
        this.querySelector("span").textContent = timeFormat.hour12 ? "24" : "12";
        toggle();

}

function toggleSeconds () {

        timeFormat.showSeconds = !timeFormat.showSeconds;
        this.querySelector("span").textContent = timeFormat.showSeconds ? "Hide" : "Show";
        toggle();

}


function toggleZero() {

        timeFormat.leadZero = !timeFormat.leadZero;
        this.querySelector("span").textContent = timeFormat.leadZero ? "Remove" : "Add";
        toggle();

}
