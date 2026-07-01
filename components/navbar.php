<?php
$currentPage = basename($_SERVER['PHP_SELF']);

$isHome = ($currentPage === 'index.php');

$homeLink = $isHome ? '#home-section' : BASE_URL . '/index.php#home-section';
$aboutLink = $isHome ? '#about-section' : BASE_URL . '/index.php#about-section';
$techStackLink = $isHome ? '#tech-stack-section' : BASE_URL . '/index.php#tech-stack-section';
$resumeLink = $isHome ? '#resume-section' : BASE_URL . '/index.php#resume-section';
$projectLink = $isHome ? '#projects-section' : BASE_URL . '/index.php#projects-section';
$contactLink = $isHome ? '#contact-section' : BASE_URL . '/index.php#contact-section';
?>

<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
    <div class="container">
        <a class="navbar-brand" href="<?= BASE_URL ?>/index.php">
            <span>F</span>ance
        </a>
        <button
            class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav nav ml-auto">
                <li class="nav-item">
                    <a href="<?= $homeLink ?>" class="nav-link">
                        <span>Home</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="<?= $aboutLink ?>" class="nav-link">
                        <span>About</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="<?= $techStackLink ?>" class="nav-link">
                        <span>Tech Stack</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="<?= $resumeLink ?>" class="nav-link">
                        <span>Resume</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="<?= $projectLink ?>" class="nav-link">
                        <span>Projects</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="<?= $contactLink ?>" class="nav-link">
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>