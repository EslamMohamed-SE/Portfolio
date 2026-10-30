document.addEventListener("DOMContentLoaded", function () {


const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (!contactForm) return;

emailjs.init({
    publicKey: "iC7hEjaESsjK0BNLB"
});

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const sendButton = contactForm.querySelector("button");

    sendButton.disabled = true;
    sendButton.textContent = "Sending...";

    formStatus.textContent = "Sending your message...";

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send(
        "service_ggthbc1",
        "template_ijd262a",
        templateParams
    )

    .then(function () {

        formStatus.textContent =
            "Message sent successfully!";

        contactForm.reset();

    })

    .catch(function (error) {

        console.error("EmailJS Error:", error);

        formStatus.textContent =
            "Failed to send message. Please try again.";

    })

    .finally(function () {

        sendButton.disabled = false;
        sendButton.textContent = "Send Message";

    });

});


});
// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
    ".about-section, .education-section, .skills-section, .about-content, .education-card, .skill-card"
);

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();