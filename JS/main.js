/*=============== MENU BUTTON TOGGLE ===============*/
const header = document.getElementById("header");
const menu_button = document.getElementById("menu_button");
const menu = document.getElementById("menu");
const logo_box = document.getElementById("logo_box");
const logo_text1 = document.getElementById("logo_text1");
const logo_text2 = document.getElementById("logo_text2");
const logo_icon = document.getElementById("logo_icon");
const nav_list = document.getElementById("nav_list");
const afspraakmenuknop = document.getElementById("afspraakmenuknop");


const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

function menuToggle(){
    header.classList.toggle("header_open");
    menu.classList.toggle("open_menu");
    logo_box.classList.toggle("logo_open");
    logo_icon.classList.toggle("logo_icon_open");
    menu_button.classList.toggle("menu_button_open");
    nav_list.classList.toggle("open_nav_list");
    afspraakmenuknop.classList.toggle("open_afspraakmenuknop");
    timer = 0;
}

menu_button.onclick = menuToggle;

afspraakmenuknop.onclick = menuToggle;
link1.onclick = menuToggle;
link2.onclick = menuToggle;
link3.onclick = menuToggle;
link4.onclick = menuToggle;


const cookie_container = document.getElementById("cookie_container");
const cookie = document.getElementById("cookie");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

function cookieToggle() {
    cookie.classList.toggle("cookie_weg");
    cookie_container.classList.toggle("cookie_container_weg");
    setTimeout(gone, 500);
}

function gone() {
    cookie_container.classList.toggle("cookie_container_weg2");
}

btn1.onclick = cookieToggle;
btn2.onclick = cookieToggle;



/*=============== SHOW HEADER ===============*/ 
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
    var scrollTop = this.window.scrollY || this.document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 80) {
        header.classList.add('hide_header');
    }
    else {
        header.classList.remove('hide_header');
    }
    lastScrollTop = scrollTop;
})


/*=============== SHOW SCROLL UP ===============*/ 
//const scrollUp = () =>{
	//const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	//this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    //: scrollUp.classList.remove('show-scroll')
//}

//window.addEventListener('scroll', scrollUp)