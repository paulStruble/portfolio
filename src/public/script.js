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

// Initalize skills section with skills active (coursework inactive)
document.addEventListener('DOMContentLoaded', () => {
    activateSkillsSection('skills');
});
