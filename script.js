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

    // Données complètes des cours
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
            {
                title: "Gestion de base de données",
                level: "Niveau L2",
                image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
                objectives: [
                    "Conception de bases de données relationnelles",
                    "Manipulation et interrogation des données",
                    "Optimisation des requêtes SQL"
                ],
                benefits: [
                    "Formation complète sur la gestion des bases de données, cruciale pour l'analyse de données dans tous les secteurs professionnels.",
                    "<strong>En Finance</strong> : Ce cours est essentiel pour la gestion des données financières et l'analyse des risques.",
                    "<strong>En Marketing</strong> : Ce cours est primordial pour la segmentation client et le CRM.",
                    "<strong>En Banque</strong> : Ce cours est indispensable pour la gestion des comptes clients et la conformité réglementaire.",
                    "<strong>En Administration</strong> : Ce cours est la clé de voûte pour l'organisation et la sécurisation de l'information administrative."
                ]
            },
            {
                title: "Sage Gestion Commerciale Niveau 1",
                level: "Niveau L2",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                objectives: [
                    "Maîtrise du logiciel Sage",
                    "Gestion des clients et fournisseurs",
                    "Automatisation des processus commerciaux"
                ],
                benefits: [
                    "Apprentissage approfondi de la gestion commerciale avec le logiciel Sage, outil indispensable pour la gestion d'entreprise.",
                    "<strong>En Finance</strong> : Ce cours permet de comprendre les flux commerciaux et leur impact financier.",
                    "<strong>En Marketing</strong> : Ce cours est utile pour suivre les performances des campagnes et gérer les relations clients.",
                    "<strong>En Banque</strong> : Ce cours est important pour la gestion de la clientèle entreprise et le financement commercial.",
                    "<strong>En Administration</strong> : Ce cours facilite la gestion des commandes, des stocks et la facturation."
                ]
            },
            {
                title: "Sage Gestion Commerciale Niveau 2",
                level: "Niveau L3",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                objectives: [
                    "Gestion avancée des stocks",
                    "Analyse des données commerciales",
                    "Reporting et tableaux de bord"
                ],
                benefits: [
                    "Perfectionnement dans l'utilisation de Sage pour une gestion commerciale optimisée.",
                    "<strong>En Finance</strong> : Ce cours permet d'analyser les performances commerciales et leur impact sur la trésorerie.",
                    "<strong>En Marketing</strong> : Ce cours est essentiel pour l'analyse des ventes et la prévision de la demande.",
                    "<strong>En Banque</strong> : Ce cours est crucial pour l'analyse de la solvabilité des entreprises clientes.",
                    "<strong>En Administration</strong> : Ce cours est indispensable pour la gestion des achats publics et la logistique."
                ]
            },
            {
                title: "Sage Comptabilité Niveau 1",
                level: "Niveau L2",
                image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                objectives: [
                    "Gestion financière avec Sage",
                    "Automatisation comptable",
                    "Production d'états financiers de base"
                ],
                benefits: [
                    "Formation complète sur la comptabilité d'entreprise avec le logiciel Sage, essentielle pour la prise de décision financière.",
                    "<strong>En Finance</strong> : Ce cours permet d'avoir la compétence centrale pour toute carrière en Finance d'entreprise, audit ou contrôle de gestion.",
                    "<strong>En Marketing</strong> : Ce cours est nécessaire pour la gestion budgétaire des campagnes Marketing et le ROI.",
                    "<strong>En Banque</strong> : Ce cours est fondamentale pour l'analyse financière des entreprises et la gestion des risques de crédit.",
                    "<strong>En Administration</strong> : Ce cours est indispensable pour la gestion budgétaire, le suivi des dépenses et la conformité financière."
                ]
            },
            {
                title: "Sage Comptabilité Niveau 2",
                level: "Niveau L3",
                image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                objectives: [
                    "Comptabilité analytique avancée",
                    "Gestion des immobilisations",
                    "Clôture et consolidation des comptes"
                ],
                benefits: [
                    "Approfondissement des fonctionnalités comptables de Sage pour une gestion financière experte.",
                    "<strong>En Finance</strong> : Ce cours est indispensable pour la production de rapports financiers complexes et l'audit.",
                    "<strong>En Marketing</strong> : Ce cours permet d'analyser la rentabilité des produits et services.",
                    "<strong>En Banque</strong> : Ce cours est essentiel pour l'évaluation des états financiers des entreprises.",
                    "<strong>En Administration</strong> : Ce cours est crucial pour la gestion comptable des institutions publiques."
                ]
            },
            {
                title: "Outils de communication et de la présentation visuelle",
                level: "Niveau L3",
                image: "https://images.unsplash.com/photo-1551836022-8b6c0a0f2b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                objectives: [
                    "Communication professionnelle",
                    "Stratégie digitale",
                    "Création de supports visuels percutants"
                ],
                benefits: [
                    "Maîtrise des outils modernes de communication pour une gestion optimale des relations professionnelles.",
                    "<strong>En Finance</strong>: Ce cours est essentiel pour la communication avec les investisseurs et les rapports financiers.",
                    "<strong>En Marketing</strong> : Ce cours est fondamental pour la communication client, les campagnes publicitaires et les réseaux sociaux.",
                    "<strong>En Banque</strong>: Ce cours est crucial pour la communication avec la clientèle, la gestion de la réputation en ligne et la communication interne.",
                    "<strong>En Administration</strong>: Ce cours est nécessaire pour la communication interne, la gestion de projet et la communication publique."
                ]
            },
            {
                title: "Création de site web",
                level: "Niveau L3",
                image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                objectives: [
                    "Création de sites web dynamiques",
                    "Utilisation des CMS (WordPress, Drupal)",
                    "Sécurité et maintenance des sites web"
                ],
                benefits: [
                    "Acquisition des compétences nécessaires au développement et à la gestion de sites web professionnels.",
                    "<strong>En Finance</strong> : Ce cours est utile pour la communication financière en ligne et la gestion des plateformes d'investissement.",
                    "<strong>En Marketing</strong> : Ce cours est primordial pour le Marketing de contenu, le SEO et la présence en ligne de la marque.",
                    "<strong>Banque</strong> : Ce cours est essentiel pour les services bancaires en ligne et la sécurité des plateformes web bancaires.",
                    "<strong>En Administration</strong> : Ce cours est important pour la gestion de l'intranet, des sites web institutionnels et les services en ligne aux citoyens/usagers."
                ]
            },
            {
                title: "Progiciel de gestion intégré",
                level: "Niveau L3",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                objectives: [
                    "Fonctionnement des ERP",
                    "Paramétrage avancé",
                    "Optimisation des ressources"
                ],
                benefits: [
                    "Expertise en gestion intégrée des processus d'entreprise grâce aux progiciels spécialisés.",
                    "<strong>En Finance</strong> : Ce cours est indispensable pour le contrôle interne, l'audit et le reporting financier intégré.",
                    "<strong>En Marketing</strong> : Ce cours est utile pour l'analyse des données Marketing multi-canal et la coordination des actions.",
                    "<strong>En Banque</strong> : Ce cours est important pour la gestion des opérations bancaires complexes et la conformité réglementaire.",
                    "<strong>En Administration</strong> : Ce cours est essentiel pour la gestion des ressources humaines, la logistique et l'efficacité opérationnelle."
                ]
            }
        ],
        master: [
            {
                title: "Système et gestion de BDD relationnelle",
                level: "Niveau M1",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                objectives: [
                    "Conception avancée de BDD",
                    "Sécurité et performance",
                    "Optimisation des SGBD"
                ],
                benefits: [
                    "Spécialisation en administration de bases de données pour des systèmes haute performance.",
                    "<strong>En Finance</strong> : Ce cours est crucial pour la gestion des bases de données financières complexes et la sécurité des données sensibles.",
                    "<strong>En Marketing</strong> : Ce cours est nécessaire pour gérer et analyser de grands volumes de données clients et de campagnes Marketing.",
                    "<strong>En Banque</strong> : Ce cours est indispensable pour l'administration des systèmes de données bancaires et la sécurité des transactions.",
                    "<strong>En Administration</strong> : Ce cours est essentiel pour la gestion des systèmes d'information à grande échelle et la protection des données institutionnelles."
                ]
            },
            {
                title: "PAO : Photoshop",
                level: "Niveau M1",
                image: "https://images.unsplash.com/photo-1543857778-c4a1a569e7bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
                objectives: [
                    "Fonctionnalités avancées de Photoshop",
                    "Création de supports professionnels",
                    "Retouche photo experte et design graphique"
                ],
                benefits: [
                    "Maîtrise du design graphique avec Photoshop pour une communication visuelle impactante.",
                    "<strong>En Finance</strong> : Ce cours est utile pour la création de rapports visuels percutants et la communication financière.",
                    "<strong>En Marketing</strong> : Ce cours est primordial pour la création de visuels de campagne, le branding et la publicité.",
                    "<strong>Banque</strong> : Ce cours est important pour la création de supports de communication client et interne.",
                    "<strong>En Administration</strong> : Ce cours est utile pour la création de documents de communication institutionnelle, de supports de formation et de présentations."
                ]
            },
            {
                title: "HTML et CSS",
                level: "Niveau M1",
                image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
                objectives: [
                    "Développement front-end moderne",
                    "Responsive design",
                    "Bonnes pratiques SEO et accessibilité"
                ],
                benefits: [
                    "Expertise en création de sites web performants et adaptatifs.",
                    "<strong>En Finance</strong> : Ce cours est indispensable pour développer des interfaces web pour les services financiers en ligne.",
                    "<strong>En Marketing</strong> : Ce cours est fondamental pour la création de landing pages, de sites e-commerce et de blogs de contenu Marketing.",
                    "<strong>En Banque</strong> : Ce cours est crucial pour le développement des plateformes bancaires en ligne et l'expérience utilisateur.",
                    "<strong>En Administration</strong> : Ce cours est essentiel pour créer des portails web administratifs, des intranets et des sites web institutionnels."
                ]
            },
            {
                title: "IA et la prise de décision",
                level: "Niveau M2",
                image: "https://images.unsplash.com/photo-1677442135722-5f8ea49cec8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
                objectives: [
                    "Comprendre les fondamentaux de l'intelligence artificielle",
                    "Appliquer l'IA dans la résolution de problèmes décisionnels",
                    "Utiliser des outils d'aide à la décision basés sur l'IA"
                ],
                benefits: [
                    "Maîtrise des concepts de l'IA pour prendre des décisions éclairées dans des environnements complexes.",
                    "<strong>En Finance</strong> : Ce cours permet d'optimiser les prévisions financières, la gestion des risques et les stratégies d'investissement à l'aide d'algorithmes intelligents.",
                    "<strong>En Marketing</strong> : Ce cours aide à analyser le comportement des consommateurs, personnaliser les campagnes et automatiser les prises de décision marketing.",
                    "<strong>En Banque</strong> : Ce cours améliore l'efficacité des services bancaires grâce à la détection des fraudes, à l'automatisation des prêts et à la gestion client assistée par IA.",
                    "<strong>En Administration</strong> : Ce cours est utile pour optimiser la gestion des ressources, prévoir les besoins organisationnels et appuyer la prise de décision stratégique dans les services publics."
                ]
            }
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
    
    // Ajouter des animations supplémentaires
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Animation pour le bouton d'inscription
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
