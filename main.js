let lastScrollTop = 0;
const footer = document.getElementById('footer');
const footerContent = document.getElementById('footer-content');

window.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    // Detectar desplazamiento hacia arriba
    if (st < lastScrollTop) {
        footer.classList.remove('translate-y-full');
    } else {
        footer.classList.add('translate-y-full');
    }
    lastScrollTop = st <= 0 ? 0 : st; // Para Mobile o negative scrolling

    // Detectar si se llegó al fondo de la página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footerContent.innerHTML = 'Nuevo contenido del footer';
    }
});