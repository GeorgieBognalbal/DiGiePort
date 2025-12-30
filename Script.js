/* BACK TO TOP */
const backToTop = document.querySelector('.back-to-top');
const headerHeight = document.querySelector('.header').offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        backToTop.style.opacity = '1';
        backToTop.style.pointerEvents = 'auto';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.pointerEvents = 'none';
    }

    /* SCROLL PROGRESS */
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    document.getElementById('progress-bar').style.width = (scrollTop / docHeight) * 100 + '%';
});

/* BACK TO TOP CLICK */
backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ACTIVE NAV LINK */
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-links a');

const currentPath = window.location.pathname;
const currentPage = currentPath.split('/').pop() || 'index.html';

if (currentPage === 'index.html' || currentPage === '') {
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) current = section.id;
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        if (current === 'home') {
            document.querySelector('a[href="#home"]').classList.add('active');
        } else if (current === 'Contact') {
            document.querySelector('a[href="#Contact"]').classList.add('active');
        }
    });
} else {
    // For other pages, set the page link active
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (currentPage === 'about.html') {
        document.querySelector('a[href="about.html"]').classList.add('active');
    } else if (currentPage === 'projects.html') {
        document.querySelector('a[href="projects.html"]').classList.add('active');
    }
}

/* MOBILE MENU TOGGLE */
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-links');

menuToggle.addEventListener('change', () => {
    navMenu.classList.toggle('show');
});

/* CLOSE MOBILE MENU ON LINK CLICK */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuToggle.checked) {
            menuToggle.checked = false;
            navMenu.classList.remove('show');
        }
    });
});

/* MAP */
const mapCard = document.getElementById('map-card');

mapCard.addEventListener('click', () => {
    mapCard.classList.toggle('expanded');
});

/* SOCIAL MEDIA LINKS */
let facebookIcon = document.querySelector('.facebook');
let instagramIcon = document.querySelector('.instagram');
let githubIcon = document.querySelector('.github');
let gmailIcon = document.querySelector('.gmail');

facebookIcon.addEventListener('click', function() {
    window.open('https://www.facebook.com/georgiericardo.bognalbal', '_blank');
});

instagramIcon.addEventListener('click', function() {
    window.open('https://www.instagram.com/cjorgie_?igsh=MWIyYzN4NXF5bHB3Ng==', '_blank');
}); 

githubIcon.addEventListener('click', function() {
    window.open('https://github.com/GeorgieBognalbal', '_blank');
});

gmailIcon.addEventListener('click', function() {
    window.open('mailto:georgiebognalbal@gmail.com', '_blank');
});