document.addEventListener("DOMContentLoaded", () => {
    let allProjects = [];
    const container = document.getElementById("projects-container");
    const searchInput = document.getElementById("project-search");
    const filterButtons = document.querySelectorAll(".project-filter button");
    let currentFilter = "All";

    const baseURL = typeof BASE_URL !== 'undefined' ? BASE_URL : '../../';

    if (!container) return;

    // Fetch data JSON
    fetch(baseURL + "data/projects.json")
        .then(response => response.json())
        .then(projects => {
            allProjects = projects;
            renderProjects(allProjects);
        })
        .catch(error => {
            console.error("Error fetching projects:", error);
            container.innerHTML = `
                <div class="col-12 text-center">
                    <h4>Failed to load projects.</h4>
                </div>
            `;
        });

    function renderProjects(projects) {
        container.innerHTML = "";
        
        if (projects.length === 0) {
            container.innerHTML = `
                <div class="col-12 text-center">
                    <h4>No project found.</h4>
                </div>
            `;
            return;
        }

        let html = "";
        projects.forEach(project => {
            const tech = project.technologies
                .slice(0, 4)
                .map(item => `<span>${item}</span>`)
                .join("");

            html += `
            <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
                <article class="project-card">
                    <div class="project-image">
                        <img src="${baseURL}${project.thumbnail}" alt="${project.title}">
                    </div>
                    <div class="project-content">
                        <div class="project-top">
                            <span class="project-category">${project.category}</span>
                            <span class="project-year">${project.year}</span>
                        </div>
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tech">${tech}</div>
                    </div>
                </article>
            </div>
            `;
        });
        
        container.innerHTML = html;
    }

    function applyFilter() {
        let keyword = searchInput.value.toLowerCase();
        let filtered = allProjects.filter(project => {
            const matchSearch = project.title.toLowerCase().includes(keyword) || 
                                project.description.toLowerCase().includes(keyword);
                                
            const matchCategory = currentFilter === "All" || 
                                project.category.toLowerCase().includes(currentFilter.toLowerCase());
            
            return matchSearch && matchCategory;
        });
        
        renderProjects(filtered);
    }

    if(searchInput) {
        searchInput.addEventListener("input", applyFilter);
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            
            currentFilter = button.dataset.filter;
            applyFilter();
        });
    });
});