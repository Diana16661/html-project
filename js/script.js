document.body.addEventListener("htmx:afterSwap", function(event) {
    if (event.target.matches("header")) { 
        const burgerMenu = document.querySelector('.header__burger-menu');
        const navLinks = document.querySelector('.header__nav-links');
        
        if (burgerMenu && navLinks) {
            burgerMenu.addEventListener('click', function() {
                navLinks.classList.toggle('open');
            });
        }
    }
});
