// Each popup shares the same native dialog behaviour and dismissal rules.
for (const dialog of document.querySelectorAll('dialog')) {
    const trigger = document.getElementById(`open-${dialog.id}`);
    trigger.addEventListener('click', () => dialog.showModal());
    dialog.querySelector('.close').addEventListener('click', () => dialog.close());

    // A selection started inside the popup must not close it on release outside.
    const outsideDialog = (event) => {
        const bounds = dialog.getBoundingClientRect();
        return event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom;
    };
    let startedOutside = false;
    dialog.addEventListener('pointerdown', (event) => {
        startedOutside = event.target === dialog && outsideDialog(event);
    });
    dialog.addEventListener('click', (event) => {
        if (startedOutside && event.target === dialog && outsideDialog(event)) {
            dialog.close();
        }
        startedOutside = false;
    });
    dialog.addEventListener('close', () => { startedOutside = false; });
}
// Native dialogs handle Escape, focus trapping, and focus restoration.
