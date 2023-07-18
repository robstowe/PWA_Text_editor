const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    // Store the event to use it later when the user clicks the install button.
    const deferredPrompt = event;

    // Show the custom install button (you may want to hide it in certain conditions).
    butInstall.style.display = 'block';

    // TODO: You can customize the appearance or behavior of the install button here.
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.style.display = 'none';

    // Show the installation prompt.
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt.
    const { outcome } = await deferredPrompt.userChoice;

    // Check the user's choice.
    if (outcome === 'accepted') {
        console.log('User accepted the PWA installation prompt.');
    } else {
        console.log('User dismissed the PWA installation prompt.');
    }

    // Clear the deferredPrompt variable so it doesn't interfere with future prompts.
    deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA installed successfully.');
 });
