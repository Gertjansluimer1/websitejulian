/*=============== MENU BUTTON TOGGLE ===============*/
const menu_button = document.getElementById("menu_button");
const menu = document.getElementById("menu");

function menuToggle(){
    menu.classList.toggle("open_menu");
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