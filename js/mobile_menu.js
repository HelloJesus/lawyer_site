const menuBtn = document.getElementById("menuToggler")
const menu = document.querySelector(".nav__list")
const menuBtnElements = menuBtn.querySelectorAll(".menu-toggler__line")


menuBtn.addEventListener('click', () => {
    menu.classList.toggle("nav__list--active")
    menuBtn.classList.toggle("menu-toggler--active")
    menuBtnElements.forEach(item => item.classList.toggle("menu-toggler__line--active"))
})
