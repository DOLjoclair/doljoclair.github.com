// Fonction pour ouvrir/fermer le menu burger
const menuBurger = document.querySelector('.menu-burger');
const navMenu = document.querySelector('.header-menu');

// Ajouter un événement au clic sur le burger menu
menuBurger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Animation au survol des éléments de compétences
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.transform = 'scale(1.1)';
        skill.style.transition = 'transform 0.3s';
    });

    skill.addEventListener('mouseout', () => {
        skill.style.transform = 'scale(1)';
    });
});

// Animation au survol des éléments de réalisations
const réalisations = document.querySelectorAll('.realisation');
réalisations.forEach(realisation => {
    realisation.addEventListener('mouseover', () => {
        realisation.style.transform = 'scale(1.05)';
        realisation.style.transition = 'transform 0.3s';
    });

    realisation.addEventListener('mouseout', () => {
        realisation.style.transform = 'scale(1)';
    });
});
