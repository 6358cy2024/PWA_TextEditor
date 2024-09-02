const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit')
    console.log("event" + event)
    event.preventDefault();
    //redefined the deferredPrompt
    window.deferredPrompt = event;
    //set hidden to false so button can appear
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    //calling the prompt event listener
    promptEvent.prompt();
    //reset value
    window.deferredPrompt = null;
    //the button is hidden again
    butInstall.classList.toggle('hidden', true);
});
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Install underway')
    //reset value
    window.deferredPrompt = null;
}); 