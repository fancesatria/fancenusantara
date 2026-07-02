<?php

require_once '../../config.php';
include '../head.php'; 
include '../navbar.php'; 
?>

<section class="ftco-section" id="projects-page">
    <div class="container">
        <div class="row justify-content-center mb-5">
            <div class="col-lg-8 text-center heading-section">
                <h1 class="big">Projects</h1>
                <h2 class="mb-4">All Projects</h2>
                <p>Browse my software engineering, web, AI, and mobile development projects.</p>
            </div>
        </div>

        <div class="row justify-content-center mb-4">
            <div class="col-lg-5">
                <input id="project-search" class="form-control" type="text" placeholder="Search project...">
            </div>
        </div>

        <div class="project-filter text-center mb-5">
            <button class="active" data-filter="All">All</button>
            <button data-filter="Full Stack">Full Stack</button>
            <button data-filter="Frontend">Frontend</button>
            <button data-filter="Backend">Backend</button>
            <button data-filter="UI/UX">UI/UX</button>
            <button data-filter="Mobile App">Mobile App</button>
            <button data-filter="Desktop App">Desktop App</button>
            <button data-filter="Machine Learning">Machine Learning</button>
            <button data-filter="Automation">Automation</button>
        </div>

        <div class="row" id="projects-container"></div>
    </div>
</section>

<?php 
include '../footer.php'; 
include '../loader.php'; 
?>

<script src="../../js/project/all-projects.js"></script>