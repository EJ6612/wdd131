document.addEventListener('DOMContentLoaded', () => {

const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

if (!btn || !menu) return;

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('open');
    btn.classList.toggle('change');
    
    const isOpen = menu.classList.contains('open');
    btn.setAttribute('aria-expanded', String(isOpen));
}
});