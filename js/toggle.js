// var button = document.querySelector("#toggle");
// button.addEventListener("click", toggle);

var menu = document.querySelector(".menu");
var container = document.querySelector(".container")
container.addEventListener("click", touch);

function toggle() {
    var visible = menu.style.display == "none" || menu.style.display == null;
    menu.style.display = visible ? "block" : "none";
}

var timer = null;
function touch() {
    if (timer !== null) {
        clearTimeout(timer);
        toggle();
        timer = null;
    } else {
        timer = setTimeout(function() {
            timer = null;
        }, 250);
    }
}
