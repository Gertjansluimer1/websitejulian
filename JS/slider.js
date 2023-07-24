const carousel = document.querySelector(".carousel");

var aanuit = true;

let isDraqgging = false, startX, startScrollLeft;

const dragStart = (e) => {
    aanuit = false;
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
    aanuit = true;
    isDraqgging = false;
    carousel.classList.remove("dragging");
}

setInterval(autoSwipe, 2000)

function autoSwipe() {
    console.log(aanuit);
    if(aanuit) {
        carousel.scrollLeft = carousel.scrollLeft + screen.width;
    }
}


//carousel.scrollLeft = carousel.scrollLeft + screen.width;


carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);

carousel.addEventListener("touchstart", dragStart);
document.addEventListener("touchend", dragStop);