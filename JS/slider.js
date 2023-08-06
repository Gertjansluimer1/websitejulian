const lijst = document.querySelector(".merken_lijst");
const item = document.querySelector(".item");
const swipeWith = lijst.querySelector(".item").offsetWidth;
const lijstChildrens = [...lijst.children];

const slider_btn_left = document.getElementById("slider_btn_left");
const slider_btn_right = document.getElementById("slider_btn_right");

let isDraqgging = false, startX, startScrollLeft;

let cardPerView = Math.round(lijst.offsetWidth / item.offsetWidth);

var aanuit = true;
var timer = 0;

lijstChildrens.slice(-cardPerView).reverse().forEach(card => {
    lijst.insertAdjacentHTML("afterbegin", card.outerHTML);
});

lijstChildrens.slice(0, cardPerView).forEach(card => {
    lijst.insertAdjacentHTML("beforeend", card.outerHTML);
});

const dragStart = (e) => {
    aanuit = false;
    isDraqgging = true;
    lijst.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = lijst.scrollLeft;
}

const touchStart = () => {
    aanuit = false;
}

const dragging = (e) => {
    if(!isDraqgging) return;
    lijst.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    aanuit = true;
    timer = 0;
    isDraqgging = false;
    lijst.classList.remove("dragging");
}

const touchStop = () => {
    aanuit = true;
    timer = 0;
}

setInterval(autoSwipe, 100)

function autoSwipe() {
    timer++;
    if(aanuit && timer > 30) {
        timer = 0;
        lijst.scrollLeft = lijst.scrollLeft + swipeWith;
    }
}

function swipeRight() {
    lijst.scrollLeft = lijst.scrollLeft + swipeWith;
    timer = 0;
}

function swipeLeft() {
    lijst.scrollLeft = lijst.scrollLeft - swipeWith;
    timer = 0;
}

const infiniteScroll = () => {
    if(lijst.scrollLeft < 2) {
        console.log("links einde");
        lijst.classList.add("no_transition");
        lijst.scrollLeft = lijst.scrollWidth - (2 * lijst.offsetWidth);
        lijst.classList.remove("no_transition");
    }
    else if(Math.ceil(lijst.scrollLeft) > (lijst.scrollWidth - lijst.offsetWidth) - 2) {
        console.log("rechts einde");
        lijst.classList.add("no_transition");
        lijst.scrollLeft = lijst.offsetWidth;
        lijst.classList.remove("no_transition");
    }
}

lijst.addEventListener("touchstart", touchStart);
document.addEventListener("touchend", dragStop);
lijst.addEventListener("scroll", infiniteScroll);

slider_btn_right.addEventListener("click", swipeRight);
slider_btn_left.addEventListener("click", swipeLeft);