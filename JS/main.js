/*=============== MENU BUTTON TOGGLE ===============*/
const header = document.getElementById("header");
const menu_button = document.getElementById("menu_button");
const menu = document.getElementById("menu");
const logo_box = document.getElementById("logo_box");
const logo_text1 = document.getElementById("logo_text1");
const logo_text2 = document.getElementById("logo_text2");
const logo_icon = document.getElementById("logo_icon");
const nav_list = document.getElementById("nav_list");

function menuToggle(){
    header.classList.toggle("header_open");
    menu.classList.toggle("open_menu");
    logo_box.classList.toggle("logo_open");
    logo_icon.classList.toggle("logo_icon_open");
    menu_button.classList.toggle("menu_button_open");
    nav_list.classList.toggle("open_nav_list");
}

menu_button.onclick = menuToggle;




/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)