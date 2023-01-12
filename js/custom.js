// Find the iframe element with the class "main-iframe"
var mainIframe = document.querySelector('.main-iframe');

// Create a div to hold the loading animation
var loading = document.createElement('div');
loading.classList.add('loading');

// Add the loading animation to the page
mainIframe.parentNode.insertBefore(loading, mainIframe);

// Listen for the "load" event on the iframe
mainIframe.addEventListener('load', function() {
    // Once the iframe has loaded its resources, remove the loading animation
    loading.parentNode.removeChild(loading);
});
