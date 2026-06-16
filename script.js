document.addEventListener("DOMContentLoaded", () => {

    const themeSwitch = document.getElementById("themeSwitch");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeSwitch.checked = true;
    }

    themeSwitch.addEventListener("change", () => {
        if (themeSwitch.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });

    setTimeout(() => {
        document.getElementById("scrollDownHint").classList.add("fade-in");
    }, 800);

    document.getElementById("caretDown").addEventListener("click", () => {
        document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("show");
        });
    }, { threshold: 0.3 });

    document.querySelectorAll(".timeline-item").forEach(item => observer.observe(item));

    const lastItem = document.querySelector(".timeline-item:last-child");

    const arrowObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            document.getElementById("scrollRightHint").classList.add("fade-in");
        }
    }, { threshold: 0.5 });

    arrowObserver.observe(lastItem);

    document.getElementById("caretRight").addEventListener("click", () => {
        document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
    });

    setTimeout(() => {
        document.getElementById("scrollNextProjects").classList.add("fade-in");
    }, 1200);

    const fadeSections = document.querySelectorAll(".fade-section");

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("show");
        });
    }, { threshold: 0.3 });

    fadeSections.forEach(sec => sectionObserver.observe(sec));

    const cards = document.querySelectorAll(".project-card");

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("show");
        });
    }, { threshold: 0.3 });

    cards.forEach(card => cardObserver.observe(card));
});


setTimeout(() => {
    document.getElementById("introScreen").style.display = "none";
}, 4000);




const dominoCards = document.querySelectorAll('.domino-card');

const dominoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hide');
        } else {
            entry.target.classList.remove('show');
            entry.target.classList.add('hide');
        }
    });
}, { threshold: 0.4 });

dominoCards.forEach(card => dominoObserver.observe(card));


window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("introScreen").style.display = "none";
    }, 4000);
});



