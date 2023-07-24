const carousel = document.querySelector(".carousel");


let isDraqgging = false, startX, startScrollLeft;

const dragStart = (e) => {
    isDraqgging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDraqgging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDraqgging = false;
    carousel.classList.remove("dragging");
}

var count = 0;
var timer = setInterval(counter, 3000)

function counter() {
    console.log(++count);
    carousel.scrollLeft = carousel.scrollLeft +screen.width;
}

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);