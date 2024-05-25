document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        const email = form.querySelector('#email').value;
        if (!validateEmail(email)) {
            e.preventDefault();
            alert('Por favor, insira um email válido.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
