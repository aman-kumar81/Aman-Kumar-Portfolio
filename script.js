/* =========================================================
   AMAN KUMAR PORTFOLIO
   ADVANCED JAVASCRIPT EFFECTS
========================================================= */


/* =========================================================
   DOM ELEMENTS
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const typingText = document.getElementById("typingText");
const particlesContainer = document.getElementById("particles");
const mouseGlow = document.getElementById("mouseGlow");
const backToTop = document.getElementById("backToTop");
const contactForm = document.getElementById("contactForm");
const year = document.getElementById("year");


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

}


/* Close mobile menu when navigation link is clicked */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("show");
        }

    });

});


/* =========================================================
   TYPING EFFECT
========================================================= */

const roles = [
    "Full Stack Developer",
    "React Developer",
    "Web Developer",
    "JavaScript Developer",
    "Gen AI Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1300);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 55 : 90
    );
}

typeEffect();


/* =========================================================
   PARTICLE BACKGROUND
========================================================= */

if (particlesContainer) {

    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (Math.random() * 10 + 8) + "s";

        particle.style.animationDelay =
            (Math.random() * 10) + "s";

        particle.style.opacity =
            Math.random();

        particle.style.transform =
            `scale(${Math.random() * 1.5})`;

        particlesContainer.appendChild(
            particle
        );

    }

}


/* =========================================================
   MOUSE FOLLOW GLOW
========================================================= */

if (mouseGlow) {

    document.addEventListener(
        "mousemove",
        event => {

            mouseGlow.style.left =
                event.clientX + "px";

            mouseGlow.style.top =
                event.clientY + "px";

        }
    );

}


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    /* Fallback for older browsers */

    revealElements.forEach(element => {

        element.classList.add("show");

    });

}


/* =========================================================
   BACK TO TOP BUTTON
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        if (!backToTop) return;

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        "nav a"
    );


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.id;

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const linkTarget =
            link.getAttribute("href");

        if (
            linkTarget ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* Run once when page loads */

updateActiveNavigation();


/* =========================================================
   MAGNETIC BUTTON EFFECT
========================================================= */

const magneticButtons =
    document.querySelectorAll(
        ".magnetic"
    );


magneticButtons.forEach(button => {

    button.addEventListener(
        "mousemove",
        event => {

            const rect =
                button.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left -
                rect.width / 2;

            const y =
                event.clientY -
                rect.top -
                rect.height / 2;

            button.style.transform =
                `translate(
                    ${x * 0.12}px,
                    ${y * 0.12}px
                )`;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translate(0, 0)";

        }
    );

});


/* =========================================================
   CONTACT FORM
========================================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                )?.value.trim();


            const email =
                document.getElementById(
                    "email"
                )?.value.trim();


            const subject =
                document.getElementById(
                    "subject"
                )?.value.trim();


            const message =
                document.getElementById(
                    "message"
                )?.value.trim();


            /* Validate fields */

            if (
                !name ||
                !email ||
                !subject ||
                !message
            ) {

                alert(
                    "Please fill all fields."
                );

                return;

            }


            /* Basic email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                alert(
                    "Please enter a valid email address."
                );

                return;

            }


            /* Create email body */

            const body =

                `Hello Aman Kumar,

Name: ${name}
Email: ${email}

Message:

${message}

Regards,
${name}`;


            /* Open user's email client */

            const mailto =

                "mailto:amankumar993148@gmail.com" +

                "?subject=" +
                encodeURIComponent(subject) +

                "&body=" +
                encodeURIComponent(body);


            window.location.href =
                mailto;

        }
    );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   PROJECT CARD 3D TILT EFFECT
   Works automatically for:
   Project 01
   Project 02
   Project 03 - Gen AI Project
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateX =
                ((y - rect.height / 2) /
                    rect.height) *
                -5;


            const rotateY =
                ((x - rect.width / 2) /
                    rect.width) *
                5;


            card.style.transform =

                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* =========================================================
   PROJECT IMAGE ERROR HANDLING
========================================================= */

document
    .querySelectorAll(".project-image img")
    .forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.style.display = "none";

                image.parentElement.classList.add(
                    "image-error"
                );

            }
        );

    });


/* =========================================================
   PROFILE IMAGE ERROR HANDLING
========================================================= */

const profileImage =
    document.querySelector(
        ".photo-ring img"
    );


if (profileImage) {

    profileImage.addEventListener(
        "error",
        () => {

            console.warn(
                "Profile image could not be loaded."
            );

        }
    );

}


/* =========================================================
   RESUME LINK CHECK
========================================================= */

const resumeLink =
    document.querySelector(
        'a[href*="Aman-Kumar-Resume.pdf"]'
    );


if (resumeLink) {

    resumeLink.addEventListener(
        "click",
        () => {

            console.log(
                "Opening Aman Kumar Resume..."
            );

        }
    );

}


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%c Aman Kumar | Full Stack Developer ",
    "color:#00e5ff;font-size:18px;font-weight:bold;"
);

console.log(
    "%c Portfolio loaded successfully 🚀 ",
    "color:#9b5cff;font-size:14px;"
);