// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add a simple animation to the h1 title
    const title = document.querySelector('h1');
    title.style.opacity = '0';
    setTimeout(() => {
        title.style.transition = 'opacity 1s ease-in';
        title.style.opacity = '1';
    }, 100);

    // Add hover effect to skills list
    const skillItems = document.querySelectorAll('ul li');
    skillItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.color = '#0066cc';
        });
        item.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    });
}); 