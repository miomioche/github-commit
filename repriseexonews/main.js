const projects = [
    {
        title: "Projet 1",
        description: "Description du Projet 1.",
        technologies: ["flexbox", "boolstrap", "JavaScript"],
        link: "",
        progress: 60// Ajoutez la progression ici (pourcentage)
    },
    {
        title: "Projet 2",
        description: "Description du Projet 2.",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "lien_projet_2",
        progress: 90 // Ajoutez la progression ici (pourcentage)
    },
    // Ajoutez les informations pour les autres projets de manière similaire
];

function renderProjects() {
    const projectsContainer = document.getElementById("projects-container");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        const progressBar = project.technologies.map(tech => `<div class="progress-bar-item">${tech}</div>`).join('');

        projectCard.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <div class="progress-bar">${progressBar}</div>
            <div class="progress-section">
                <span>Progression: ${project.progress}%</span>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: ${project.progress}%;" aria-valuenow="${project.progress}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <a href="${project.link}" target="_blank">Voir le projet</a>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

renderProjects();

