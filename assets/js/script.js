const experience = document.querySelector('#experience');
const openExperience = document.querySelector('#open-experience');

openExperience.addEventListener('click', () => experience.showModal());
experience.querySelector('.close').addEventListener('click', () => experience.close());

// Close only when the entire pointer gesture is outside the dialog. Selecting
// text inside and releasing outside must not dismiss the experience panel.
const outsideDialog = (event) => {
    const bounds = experience.getBoundingClientRect();
    return event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom;
};
let startedOutside = false;
experience.addEventListener('pointerdown', (event) => {
    startedOutside = event.target === experience && outsideDialog(event);
});
experience.addEventListener('click', (event) => {
    if (startedOutside && event.target === experience && outsideDialog(event)) {
        experience.close();
    }
    startedOutside = false;
});
// Native dialog handles Escape, focus trapping, and focus restoration.
