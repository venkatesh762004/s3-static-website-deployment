
document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "Cloud & DevOps Portfolio Loaded Successfully!"
    );

    // Navigation link click
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log(
                "Navigating to: " + link.textContent
            );

        });

    });

    // Hero button interaction
    const projectButton = document.querySelector(
        ".hero-buttons .primary-btn"
    );

    projectButton.addEventListener("click", function () {

        console.log("Viewing portfolio projects");

    });

});
