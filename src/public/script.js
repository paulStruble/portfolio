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

// Initalize skills section with skills active (coursework inactive)
document.addEventListener('DOMContentLoaded', () => {
    updatePrismPosition();
    updatePrismRotation();
    updatePrismPosition();
    updatePrismRotation();
    activateSkillsSection('skills'); // load skills section
    setCopyrightYear();
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