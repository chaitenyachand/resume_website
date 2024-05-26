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
            <div class="card mb-4">
                <div class="card-body">
                    <h3 class="card-title">${project.title}</h3>
                    <p class="card-text">${project.description}</p>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill out all fields.');
        }
    });
});
