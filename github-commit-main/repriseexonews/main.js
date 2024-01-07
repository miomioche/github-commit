const projects = [
    {
        title: "Créer un Carousel",
        description: "Nous avons créé un carrousel à partir de Bootstrap. Pour cela, nous avons créé un container avec une classe afin de lui donner nos dimensions. Nous avons ensuite créé le titre avec un H2 que nous avons mis en place sans CSS ni JavaScript. Pour créer notre container, nous avons utilisé plusieurs div qui ont permis de stocker les images. Ensuite, nous avons créé un bouton qui permet le défilement du carrousel.",
        technologies: ["flexbox", "boolstrap", "JavaScript"],
        link: "",
        progress: 60// Ajoutez la progression ici (pourcentage)
    },
    {
        title: "Kyoto",
        description: "Création une page web sur Kyoto avec des tafications et un certifat inscription.Tout en le rendant responsive. ",
        technologies: ["HTML, CSS"],
        lien.href = "./"
        progress: 90 // Ajoutez la progression ici (pourcentage)
    },
    {
        title: "Florence",
        description: "Description du Florence.",
        technologies: ["HTML , CSS"],
        link: "lien_projet_2",
        progress: 90 // Ajoutez la progression ici (pourcentage)
    },
    {
        title: "Neon loading",
        description: "Le but était de crée un néon jaune avec un délais.",
        technologies: ["CSS , HTML"],
        link: "lien_projet_2",
        progress: 90 // Ajoutez la progression ici (pourcentage)
    },
    {
        title: "Banderole",
        description: "Le but était de crée une banderole avec plusieurs  noms de paysqui doivent s'enchainer",
        technologies: ["HTML, CSS"],
        link: "transitions",
        progress: 90 // Ajoutez la progression ici (pourcentage)
    },
    {
        title: "Projet 6",
        description: "Description du Projet 2.",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "lien_projet_2",
        progress: 90 // Ajoutez la progression ici (pourcentage)
    },
    {
        title: "Projet 7",
        description: "Description du Projet 2.",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "lien_projet_2",
        progress: 90 // Ajoutez la progression ici (pourcentage)
    },
    {
        title: "Projet 8",
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

