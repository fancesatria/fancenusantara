const container = document.getElementById("featured-projects");

fetch("data/projects.json")
    .then(res => res.json())
    .then(projects => {

        const featuredProjects = projects
            .filter(project => project.featured)
            .slice(0, 3);

        let html = "";

        featuredProjects.forEach(project => {

            const technologies = project.technologies
                .slice(0,4)
                .map(tech => `<span>${tech}</span>`)
                .join("");

            html += `
                <div class="col-lg-4 col-md-6 mb-4">

                    <article class="project-card">

                        <div class="project-image">

                            <img
                                src="${project.thumbnail}"
                                alt="${project.title}"
                                loading="lazy"
                                onerror="this.src='images/project-placeholder.jpg'"
                            >

                        </div>

                        <div class="project-content">

                            <div class="project-top">

                                <span class="project-category">
                                    ${project.category}
                                </span>

                                <span class="project-year">
                                    ${project.year}
                                </span>

                            </div>

                            <h3 class="project-title">
                                ${project.title}
                            </h3>

                            <p class="project-description">
                                ${project.description}
                            </p>

                            <div class="project-tech">
                                ${technologies}
                            </div>

                        </div>

                    </article>

                </div>
            `;

        });

        container.innerHTML = html;

    })
    .catch(error => {
        console.error(error);

        container.innerHTML = `
            <div class="col-12 text-center">
                Failed to load projects.
            </div>
        `;
    });