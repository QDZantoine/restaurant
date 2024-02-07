//---------NAVBAR MOBILE-----

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
//---------SCROLLING NAVBAR-------
// Fonction qui ajoute la classe fixed-nav à la barre de navigation lors du défilement
function handleScroll() {
    var navbar = document.querySelector('nav'); // Remplacez 'nav' par le sélecteur approprié si nécessaire
    var scrollDistance = window.scrollY; // Distance défilée depuis le haut de la page
  
    // Vous pouvez ajuster '100' à la distance de défilement souhaitée
    if (scrollDistance > 100) {
      navbar.classList.add('fixed-nav');
    } else {
      navbar.classList.remove('fixed-nav');
    }
  }
  
  // Écoutez l'événement de défilement sur la fenêtre
  window.addEventListener('scroll', handleScroll);
  

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