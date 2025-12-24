
/* BACK TO TOP */
const backToTop = document.querySelector('.back-to-top');
const headerHeight = document.querySelector('.header').offsetHeight;

window.addEventListener('scroll', () => {
    backToTop.style.opacity = window.scrollY > headerHeight ? '1' : '0';
    backToTop.style.pointerEvents = window.scrollY > headerHeight ? 'auto' : 'none';
});

/* SCROLL PROGRESS */
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    document.getElementById('progress-bar').style.width = (scrollTop / docHeight) * 100 + '%';
});

/* ACTIVE NAV LINK */
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) current = section.id;
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

/* MOBILE MENU */
document.getElementById("menu-toggle").onclick = () => {
    document.getElementById("nav-links").classList.toggle("show");
};


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