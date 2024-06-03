// Toggle the icon and navbar visibility
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');  // Toggle the 'bx-x' class on the menu icon to change its appearance
    navbar.classList.toggle('active');  // Toggle the 'active' class on the navbar to show/hide it
};

// Change active link based on scroll position
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');  // Remove 'active' class from all links
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');  // Add 'active' class to the current section link
            });
        }
    });

    // Add 'sticky' class to header when scrolled down 100px
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when a navbar link is clicked (on scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll reveal animation
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });  // Reveal elements from the top
ScrollReveal().reveal('.home-img, .services-container, .contact form, .portfolio-box', { origin: 'bottom' });  // Reveal elements from the bottom
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });  // Reveal elements from the left
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });  // Reveal elements from the right

// Typed.js for typing effect in the home section
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Web Developer'],  // Strings to type
    typeSpeed: 100,  // Speed of typing
    backSpeed: 100,  // Speed of deleting
    backDelay: 1000,  // Delay before backspacing
    loop: true  // Loop the typing effect
});
