
function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}
// Move the "No" button randomly on both mouse and touch
function moveRandomEl(elm) {
    elm.style.position = "fixed"; // "absolute" ki jagah "fixed" use karo
    elm.style.top = Math.floor(Math.random() * 80 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 80 + 5) + "%";
    elm.style.transition = "all 0.3s ease"; // Smooth movement
}

const moveRandom = document.querySelector("#move-random");

// For Desktop (mouse hover)
moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
});

// For Mobile (touch)
moveRandom.addEventListener("touchstart", function (e) {
    e.preventDefault(); // Prevent default touch behavior
    moveRandomEl(e.target);
});

// For Mobile (click)
moveRandom.addEventListener("click", function (e) {
    e.preventDefault();
    moveRandomEl(e.target);
});
const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});
