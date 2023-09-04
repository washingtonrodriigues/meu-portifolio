import { NavLink } from 'react-router-dom';
import style from './style.css';
import { motion } from 'framer-motion';

export default function Home() {
  function downloadFile() {
    const googleDriveFileLink =
      'https://drive.google.com/u/1/uc?id=1UPPez9b10BA-7bGNFjK_bHUpvx4Wrk3c&export=download';
    window.open(googleDriveFileLink);
  }
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="first-content ">
        <div className="title">
          <h2 className="welcome-title">Seja bem-vindo(a)!</h2>
          <h1 className="name-title">Washington Rodrigues</h1>
          <h2 className="title-title">
            Desenvolvedor Front-end e UI/UX Designer
          </h2>
        </div>
        <ul className="contact-links">
          <li>
            <a href="#">
              <i class="fa-regular fa-envelope"></i>washington_sr_@hotmail.com
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-whatsapp"></i>+55 79 9 9921-6703
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-solid fa-location-dot"></i>Aracaju, Sergipe - Brasil
            </a>
          </li>
        </ul>
        <button onClick={downloadFile} className="download-cv">
          <i class="fa-solid fa-download"></i>Download CV
        </button>
        <NavLink className="next-page" to="/projects">
          Próxima página
        </NavLink>
      </div>
      <div className="second-content">
        <img
          className="photo"
          src="../../public/profile.jpg"
          alt="Foto Washington Rodrigues"
        />
      </div>
    </motion.header>
  );
}
