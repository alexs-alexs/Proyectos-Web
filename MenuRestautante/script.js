
// Selecciona el botón de menú y el menú en sí
const menuToggle = document.getElementById('mobile-menu');
const menu = document.getElementById('menu');
const body = document.body;

// Agrega un evento de clic al botón de menú
menuToggle.addEventListener('click', () => {
    // Muestra el menú al agregar la clase 'active'
    menu.classList.toggle('active');

    // Si el menú está abierto, después de 3 segundos, ciérralo quitando la clase 'active'
    if (menu.classList.contains('active')) {
        setTimeout(() => {
            menu.classList.remove('active');
        }, 3000); // Cambia este valor al número de milisegundos que desees
    }
});

body.addEventListener('click', (event) => {
    // Si el menú está abierto y el clic no fue en el menú ni en el botón de menú, ciérralo
    if (menu.classList.contains('active') && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('active');
    }
});

const contactLink = document.querySelector('a[href="#footer-contact"]');

contactLink.addEventListener('click', (event) => {
    event.preventDefault();
    
    const contactSection = document.getElementById('footer-contact');
    const offsetTop = contactSection.offsetTop;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

