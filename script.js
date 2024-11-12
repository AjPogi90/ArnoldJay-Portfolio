
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach((section) => observer.observe(section));
// Typing animation code
const options = {
    strings: [" Web Developer", " web Designer", " Programmer", " GameDeveloper", "Hardware Engineer"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true,
};

new Typed(".typing", options);




});

