const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {});
window.addEventListener('beforeinstallprompt', (event) => {
    //Storing of the hidden event
    window.defferedPrompt = event;

    //Removal of the hidden class from the button
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {});
butInstall.addEventListener('click', async () => {
    const promptEvent = window.defferedPrompt;
    if (!promptEvent) {
        return;
    }

    //Show Prompt function
    promptEvent.prompt();

    //Resseting of the prompt variable
    window.defferedPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {});
window.addEventListener('appinstalled', (event) => {

    //Prompt clearing
    window.deferredPrompt = null;
    console.log('👍', 'appinstalled', event);
});