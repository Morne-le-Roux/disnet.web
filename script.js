document.addEventListener('DOMContentLoaded', function() {
    const elements = ['h1', 'h2', 'h3', '.about-me', '.about-disnetdev'];
    const delays = [0, 50, 100, 150, 200];

    elements.forEach((element, index) => {
        const elem = document.querySelector(element);
        elem.style.opacity = '0';
        elem.style.transform = 'translateY(10px)'; 
        setTimeout(() => {
            elem.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease'; 
            elem.style.opacity = '1';
            elem.style.transform = 'translateY(0)'; 
        }, delays[index]);
    });

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
    techStackIconTexts[index].style.opacity = '0'; 
    techStackIconTexts[index].style.transition = 'opacity 0.3s ease'; 

    icon.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)'; 
        techStackIconTexts[index].style.opacity = '1';
    });
    icon.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)'; 
        techStackIconTexts[index].style.opacity = '0'; 
    });
});
    
    
    const projectCards = document.querySelectorAll('.personal-project-card, .disnetdev-project-card-fishroom, .disnetdev-project-card-spaza');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 0 15px 0 rgba(0, 0, 0, 0.5)';
        });
        card.addEventListener('mouseout', function() {
            this.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.5)';
        });
    });

  

}); 