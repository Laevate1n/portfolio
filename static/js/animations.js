document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hover-grow');

    elements.forEach(element => {
        element.classList.add('transition', 'transform', 'duration-500');
        element.addEventListener('mouseover', () => {
            element.classList.add('scale-105');
        });
        element.addEventListener('mouseout', () => {
            element.classList.remove('scale-105');
        });
    });
});
