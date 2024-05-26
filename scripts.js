document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic Project Insertion
    const projects = [
        {
            title: 'Project 1',
            description: 'A brief description of the project and what technologies were used.',
        },
        {
            title: 'Project 2',
            description: 'A brief description of the project and what technologies were used.',
        },
        // Add more projects as needed
    ];

    const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'col-md-6';
        projectCard.innerHTML = `
            <div class="card mb-4 project-card">
                <div class="card-body">
                    <h3 class="card-title">${project.title}</h3>
                    <p class="card-text">${project.description}</p>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
});

