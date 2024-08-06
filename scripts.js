window.addEventListener('resize', function() {
    const logo = document.getElementById('logo');
    const header = document.querySelector('header');

    // Get the width of the window
    const windowWidth = window.innerWidth;

    // Adjust logo size based on window width
    if (windowWidth < 700) {
        logo.style.marginLeft = '0px';
    } else if (windowWidth < 1150){
        logo.style.marginLeft = `${(windowWidth / 2) - 350}px`;
    } else {
        logo.style.marginLeft = '220px';
    }

    // Optional: Adjust header text size based on window width
    // const headerText = header.querySelector('h1');
    // if (windowWidth < 600) {
    //     headerText.style.fontSize = '18px';
    // } else if (windowWidth < 900) {
    //     headerText.style.fontSize = '22px';
    // } else {
    //     headerText.style.fontSize = '24px';
    // }
});

window.addEventListener('scroll', function() {
    const navBar = document.getElementById('navBar'); // Replace 'navBar' with the actual ID of your navigation bar
    const scrollThreshold = 161; // Change this value based on when you want the nav bar to become fixed
    const mascot = this.document.getElementById('mascot');
    const pageHeight = document.body.scrollHeight;

    if (window.scrollY > scrollThreshold) {
        navBar.classList.add('follow');
    } else {
        navBar.classList.remove('follow');
    }

    mascot.style.transform = 'translateY(' + (400*window.scrollY/pageHeight) + 'px)';
});

// Trigger the resize event on page load to apply the settings initially
window.dispatchEvent(new Event('resize'));
window.dispatchEvent(new Event('scroll'));