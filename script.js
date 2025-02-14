// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add a simple animation to the h1 title
    const title = document.querySelector('h1');
    title.style.opacity = '0';
    title.style.transform = 'translateY(10px)'; 
    setTimeout(() => {
        title.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease'; 
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)'; 
    }, 0);

    const subtitle = document.querySelector('h2');
    subtitle.style.opacity = '0';
    subtitle.style.transform = 'translateY(10px)'; 
    setTimeout(() => {
        subtitle.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease'; 
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)'; 
    }, 50); 

    const disnetdev = document.querySelector('h3');
    disnetdev.style.opacity = '0';
    disnetdev.style.transform = 'translateY(10px)'; 
    setTimeout(() => {
        disnetdev.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease'; 
        disnetdev.style.opacity = '1';
        disnetdev.style.transform = 'translateY(0)'; 
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

const techStackIcons = document.querySelectorAll('.tech-stack-icon');
const techStackIconTexts = document.querySelectorAll('.tech-stack-icon-text');

techStackIcons.forEach((icon, index) => {
    icon.style.transition = 'transform 0.3s ease'; 
    techStackIconTexts[index].style.opacity = '0'; // Initially hide the text
    techStackIconTexts[index].style.transition = 'opacity 0.3s ease'; // Add transition for text

    icon.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)'; 
        techStackIconTexts[index].style.opacity = '1'; // Show text on hover
    });
    icon.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)'; 
        techStackIconTexts[index].style.opacity = '0'; // Hide text when not hovering
    });
});
}); 