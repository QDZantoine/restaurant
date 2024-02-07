const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

//------slider menu -----//
const menus = document.querySelectorAll('.menu-card');
let currentMenu = 0;

function showMenu(index) {
    menus.forEach(menu => menu.classList.add('hidden'));
    menus[index].classList.remove('hidden');
}

document.getElementById('prev-menu').addEventListener('click', () => {
    if (currentMenu > 0) {
        currentMenu--;
        showMenu(currentMenu);
    }
});

document.getElementById('next-menu').addEventListener('click', () => {
    if (currentMenu < menus.length - 1) {
        currentMenu++;
        showMenu(currentMenu);
    }
});

// Initial display
showMenu(currentMenu);