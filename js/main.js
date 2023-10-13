/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    backdrop = document.querySelector('.wrapper')

/* === MENU Show  === */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
        backdrop.classList.add('backdropShow')
    })
}

/* === MENU HIDDEN  === */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
        backdrop.classList.remove('backdropShow')
    })
}