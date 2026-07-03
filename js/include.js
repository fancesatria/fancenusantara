async function loadComponent(id, file) {

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(file);
        }

        const html = await response.text();

        document.getElementById(id).innerHTML = html;

    }
    catch(error){

        console.error("Cannot load:", error);

    }

}

window.addEventListener("DOMContentLoaded", async () => {

    await loadComponent(
        "head-component",
        "components/head.html"
    );

    await loadComponent(
        "navbar-component",
        "components/navbar.html"
    );

    await loadComponent(
        "hero-component",
        "components/hero.html"
    );

    await loadComponent(
        "about-component",
        "components/about.html"
    );

    await loadComponent(
        "tech-stack-component",
        "components/tech-stack.html"
    );

    await loadComponent(
        "resume-component",
        "components/resume.html"
    );

    await loadComponent(
        "featured-project-component",
        "components/project/featured-projects.html"
    );

    await loadComponent(
        "hire-me-component",
        "components/hire-me.html"
    );

    await loadComponent(
        "contact-component",
        "components/contact.html"
    );

    await loadComponent(
        "footer-component",
        "components/footer.html"
    );

    await loadComponent(
        "loader-component",
        "components/loader.html"
    );

});