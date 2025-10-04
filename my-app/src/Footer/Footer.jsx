 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter ,faSquareInstagram} from "@fortawesome/free-brands-svg-icons";
 
 export default function Footer() {
  return (
      <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full z-10">
      <div className="text-center text-sm mb-4">
        © 2025 ProductivitY+. All rights reserved.
      </div>
      <div className="flex justify-center space-x-6 text-xl">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faSquareInstagram} />
        </a>
      </div>
    
      </footer>
  );
}