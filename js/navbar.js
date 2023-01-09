var nav = document.getElementById('NavCompleto');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        nav.classList.add('navFixedDark');
    } else {
        nav.classList.remove('navFixedDark');
    }
});