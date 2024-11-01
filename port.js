const menuIcon =document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onlick = () => {
    navbar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}