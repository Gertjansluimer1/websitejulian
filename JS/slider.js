const carousel = document.querySelector(".carousel");
const swipeWith = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

var aanuit = true;
var timer = true;

let cardPerView = 1

let isDraqgging = false, startX, startScrollLeft;

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

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
    timer = 0;
    isDraqgging = false;
    carousel.classList.remove("dragging");
}

setInterval(autoSwipe, 100)

function autoSwipe() {
    timer++;
    console.log(timer);
    if(aanuit && timer > 25) {
        timer = 0;
        carousel.scrollLeft = carousel.scrollLeft + swipeWith;
    }
}


//carousel.scrollLeft = carousel.scrollLeft + screen.width;

const infiniteScroll = () => {
    if(carousel.scrollLeft === 0) {
        console.log("links einde");
        carousel.classList.add("no_transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no_transition");
    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        console.log("rechts einde");
        carousel.classList.add("no_transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no_transition");
    }
}

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);

carousel.addEventListener("touchstart", dragStart);
document.addEventListener("touchend", dragStop);