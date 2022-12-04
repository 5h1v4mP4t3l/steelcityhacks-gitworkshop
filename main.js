const menu = document.getElementById('menu');
const exit = document.getElementById('exit');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    navLinks.style.display = "block";
    menu.style.display = "none";
    exit.style.display = "block";
})

exit.addEventListener('click', () => {
    navLinks.style.display = "none";
    menu.style.display = "block";
    exit.style.display = "none";
})