const observer = new IntersectionObserver((entries) => {
    const navbar = document.getElementById('navbar');
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


document.addEventListener('DOMContentLoaded', function () {
    const aboutButton = document.getElementById('aboutButton');
    const aboutSection = document.getElementById('about');

    const projectsButton = document.getElementById('projectsButton');
    const projectsSection = document.getElementById('projects');

    const contactButton = document.getElementById('contactButton');
    const contactSection = document.getElementById('contact');

    aboutButton.addEventListener('click', function () {
        aboutSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
    projectsButton.addEventListener('click', function () {
        projectsSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
    contactButton.addEventListener('click', function () {
        contactSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});