fetch("data/projects.json")
    .then(response => response.json())
    .then(projects => {
        const count = projects.length;
        const counter = document.getElementById("project-count");

        counter.setAttribute("data-number", count);

        $({ val: 0 }).animate(
            { val: count },
            {
                duration: 1500,
                easing: "swing",
                step: function () {
                    counter.textContent = Math.floor(this.val);
                },
                complete: function () {
                    counter.textContent = count;
                }
            }
        );
    });