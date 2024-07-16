"use client";

import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SmartexpoProjet from "../../public/projets/smartexpo.png";
import PixelProjet from "../../public/projets/pixel.png";
import FoodeatProjet from "../../public/projets/foodeat.png";
import KeywatchProjet from "../../public/projets/keywatch.png";

const projects = [
  {
    title: "Smartexpo",
    description: "Exposition des modèles de smartphones. Projet académique L3 CDA.",
    type: "Application Web",
    skills: ["HTML", "CSS", "PHP", "CodeIgniter", "Bootstrap", "SQL"],
    image: SmartexpoProjet,
    detailsLink: "",
    sourceLink: "https://github.com/lchaboissier/smartexpo",
  },
  {
    title: "Pixel",
    description: "Site Web regroupant l'ensemble des jeux-vidéos. Projet académique LP AMIO.",
    type: "Application Web",
    skills: ["HTML", "CSS", "PHP", "Symfony", "SQL", "Docker"],
    image: PixelProjet,
    detailsLink: "",
    sourceLink: "https://github.com/lchaboissier/Pixel",
  },
  {
    title: "Foodeat",
    description: "Application mobile regroupant la liste des recettes de cuisine à l'aide d'une API. Projet académique LP AMIO.",
    type: "Application Mobile",
    skills: ["Swift", "API"],
    image: FoodeatProjet,
    detailsLink: "",
    sourceLink: "https://github.com/lchaboissier/food_project",
  },
  {
    title: "Keywatch",
    description: "Application web basée sur un jeu de frappe consistant à écrire un texte le plus vite possible. Projet académique LP AMIO.",
    type: "Application Web",
    skills: ["HTML", "SCSS", "TypeScript", "Angular"],
    image: KeywatchProjet,
    detailsLink: "",
    sourceLink: "https://github.com/lchaboissier/keywatch",
  },
];

const handleDetailsClick = () => {
  alert("Le bouton Détails sera disponible prochainement !");
};

const ProjectsSection = () => {
  return (
    <section id="projets" className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Projets</h2>
        <div className="flex items-center space-x-5 text-indigo-500 mb-8">                
          <div className="w-40 h-1.5 rounded-full bg-indigo-500"></div>
        </div>
        <p className="dark:text-gray-300 text-2xl font-normal text-gray-700 mb-4">L'ensemble des créations que j'ai pu réaliser</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <Image 
                src={project.image}
                alt={`Image de ${project.title}`}
                width={400}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-6 dark:bg-slate-950">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.type}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={handleDetailsClick}
                    className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-100"
                  >
                    Détails
                  </button>
                  <a href={project.sourceLink} className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-900 transition duration-100">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="ml-2">Code Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
