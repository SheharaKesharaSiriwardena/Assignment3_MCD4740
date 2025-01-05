// JavaScript to handle smooth scrolling
const scrollBars = document.querySelectorAll('.scroll-bar');

scrollBars.forEach(bar => {
    bar.addEventListener('click', () => {
        // Get the target section ID
        const target = document.querySelector(bar.getAttribute('data-target'));

        // Smoothly scroll to the target section
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});