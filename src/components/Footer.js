import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
      <footer className="dark:bg-slate-900 bg-gray-800 text-white py-10">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.linkedin.com/in/luca-chaboissier/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 social-media"
            >

              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/lchaboissier"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 social-media"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
          <p className="text-sm">&copy; 2025 — Luca Chaboissier</p>
        </div>
      </footer>
    );
};

export default Footer;
