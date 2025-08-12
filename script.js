// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour créer une carte de cours
    function createCourseCard(course) {
        return `
        <article class="course-card">
            <div class="course-img">
                <img src="${course.image}" alt="${course.title}">
                <span class="level-badge">${course.level}</span>
            </div>
            <div class="course-info">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-level">${course.level}</p>
                <div class="course-content">
                    <p><strong>Objectifs :</strong></p>
                    ${course.objectives.map(obj => `<p>${obj}</p>`).join('')}
                    <p><strong>Avantages pour vous :</strong></p>
                    <ul class="benefits-list">
                        ${course.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </article>
        `;
    }

    // Données des cours
    const courses = {
        licence: [
            {
                title: "Informatique de base",
                level: "Niveau L1",
                image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                objectives: [
                    "Acquérir les fondamentaux de l'informatique",
                    "Maîtriser les composants matériels et logiciels",
                    "Bases des systèmes d'exploitation et réseaux"
                ],
                benefits: [
                    "Ce cours permet de se familiariser avec les concepts essentiels de l'informatique. Il offre les bases pour comprendre l'architecture des ordinateurs et les principes des réseaux, essentiels pour tous les parcours.",
                    "<strong>En Finance</strong> : Ce cours est indispensable pour la compréhension des systèmes d'information financière.",
                    "<strong>En Marketing</strong> : Ce cours est fondamental pour le Marketing digital et l'analyse des données en ligne.",
                    "<strong>En Banque</strong> : Ce cours est crucial pour la sécurité des systèmes bancaires et la gestion des transactions électroniques.",
                    "<strong>En Administration</strong> : Ce cours est nécessaire pour optimiser les infrastructures IT et la gestion des données administratives."
                ]
            },
            // Ajouter les autres cours de licence ici...
        ],
        master: [
            // Ajouter les cours de master ici...
        ]
    };

    // Charger les cours dans les sections appropriées
    const licenceSection = document.querySelector('#licence .course-grid');
    const masterSection = document.querySelector('#master .course-grid');
    
    courses.licence.forEach(course => {
        licenceSection.innerHTML += createCourseCard(course);
    });
    
    courses.master.forEach(course => {
        masterSection.innerHTML += createCourseCard(course);
    });
});
