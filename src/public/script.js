function updatePrismPosition() {
    // get elements from DOM
    const profileImage = document.getElementById('profile-image');
    const prismContainer = document.getElementById('landing-background');
    const prismGraphic = document.getElementById('prism-graphic');

    // get pfp and prism rectangles (for position/dimensions)
    const profileBox = profileImage.getBoundingClientRect();
    const graphicBox = prismGraphic.getBoundingClientRect();

    // get coords for center of pfp
    const profileCenterX = profileBox.left + profileBox.width / 2;
    const profileCenterY = profileBox.right + profileBox.height / 2;

    // calculate coords for prism
    const graphicLeft = profileCenterX - graphicBox.width / 2;
    const graphicRight = profileCenterY - graphicBox.height / 2;

    // update coords for prism
    prismGraphic.style.left = `${graphicLeft}px`;
    prismGraphic.style.right = `${graphicRight}px`;
}

function updatePrismRotation() {
    const prism = document.getElementById('prism-graphic');

    const rotation = Math.log2(scrollY + 20) * 2 - 15.5; // calculate rotation

    prism.style.rotate = `${rotation}deg`; // perform rotation
}

function activateSkillsSection(section) {
    skillsHeading = document.getElementById('skills-heading');
    courseworkHeading = document.getElementById('coursework-heading');
    skillsContainer = document.getElementById('skills-container');
    courseworkContainer = document.getElementById('coursework-container');

    if (section === 'skills') {
        // switch to skills
        courseworkHeading.classList.add('inactive-heading');
        courseworkContainer.classList.add('inactive-container');
        skillsHeading.classList.remove('inactive-heading');
        skillsContainer.classList.remove('inactive-container');
    } else if (section === 'coursework') {
        // switch to coursework
        skillsHeading.classList.add('inactive-heading');
        skillsContainer.classList.add('inactive-container');
        courseworkHeading.classList.remove('inactive-heading');
        courseworkContainer.classList.remove('inactive-container');
    }
}

function setCopyrightYear() {
    const currentYear = new Date().getUTCFullYear(); // TODO: dynamic
    document.getElementById('current-year').innerHTML = currentYear;
}

function scrollCourseProjects(direction) {
    // get projects from DOM
    const proj0 = document.querySelector('.extra-project.pos-0');
    const proj1 = document.querySelector('.extra-project.pos-1');
    const proj2 = document.querySelector('.extra-project.pos-2');
    const proj3 = document.querySelector('.extra-project.pos-3');
    const proj4 = document.querySelector('.extra-project.pos-4');
    const proj5 = document.querySelector('.extra-project.pos-5');
    const proj6 = document.querySelector('.extra-project.pos-6');
    const proj7 = document.querySelector('.extra-project.pos-7');
    const proj8 = document.querySelector('.extra-project.pos-8');
    const proj9 = document.querySelector('.extra-project.pos-9');
    const proj10 = document.querySelector('.extra-project.pos-10');
    const proj11 = document.querySelector('.extra-project.pos-11');

    // remove current position class
    proj0.classList.remove('pos-0');
    proj1.classList.remove('pos-1');
    proj2.classList.remove('pos-2');
    proj3.classList.remove('pos-3');
    proj4.classList.remove('pos-4');
    proj5.classList.remove('pos-5');
    proj6.classList.remove('pos-6');
    proj7.classList.remove('pos-7');
    proj8.classList.remove('pos-8');
    proj9.classList.remove('pos-9');
    proj10.classList.remove('pos-10');
    proj11.classList.remove('pos-11');

    // add next position class
    if (direction === 'left') {
        // scroll left
        proj0.classList.add('pos-1');
        proj1.classList.add('pos-2');
        proj2.classList.add('pos-3');
        proj3.classList.add('pos-4');
        proj4.classList.add('pos-5');
        proj5.classList.add('pos-6');
        proj6.classList.add('pos-7');
        proj7.classList.add('pos-8');
        proj8.classList.add('pos-9');
        proj9.classList.add('pos-10');
        proj10.classList.add('pos-11');
        proj11.classList.add('pos-0');
    } else if (direction === 'right') {
        // scroll right
        proj0.classList.add('pos-11');
        proj1.classList.add('pos-0');
        proj2.classList.add('pos-1');
        proj3.classList.add('pos-2');
        proj4.classList.add('pos-3');
        proj5.classList.add('pos-4');
        proj6.classList.add('pos-5');
        proj7.classList.add('pos-6');
        proj8.classList.add('pos-7');
        proj9.classList.add('pos-8');
        proj10.classList.add('pos-9');
        proj11.classList.add('pos-10');
    };
}

function activateCourseProjects() {
    const scrollLeft = document.querySelector('.scroll-button.left');
    const scrollRight = document.querySelector('.scroll-button.right');

    scrollLeft.addEventListener('click', () => {
        scrollCourseProjects('left');
    });
    scrollRight.addEventListener('click', () => {
        scrollCourseProjects('right')
    });
 }

// Initalize skills section with skills active (coursework inactive)
document.addEventListener('DOMContentLoaded', () => {
    updatePrismPosition();
    updatePrismRotation();
    // activateSkillsSection('skills'); // load skills section
    setCopyrightYear();
    activateCourseProjects(); // other projects scrolling
});

// Handle scroll event
document.addEventListener('scroll', () => {
    updatePrismPosition();
    updatePrismRotation();
});

// Handle resize event
document.addEventListener('resize', () => {
    updatePrismPosition();
    updatePrismRotation();
});
