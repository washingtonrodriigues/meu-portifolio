import style from './style.css';
import { motion, useScroll } from 'framer-motion';
import NextPage from '../NextPage';
import { useState } from 'react';

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const styleBtn = {
    transition: hovered ? '.3s' : '',
  };
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
      className='home'
    >
      <div className="first-content-home">
        <div className="title">
          <h1 className="name-title">Washington Rodrigues</h1>
          <h2 className="title-title">
            Desenvolvedor Front-end e UI/UX Designer
          </h2>
          <p className="p-bio" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
            Utilizando o ReactJs como principal tecnologia juntamente com as
            noções de UI/UX, me dedico à criação de aplicações web sofisticadas
            e altamente responsivas, com foco na experiência do usuário. Busco
            oferecer soluções que não apenas atendam às necessidades, mas também
            encantem os usuários.
          </p>
        </div>
        <div className="technologies">
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              className="tech-icons"
              src="../.././public/icons/react.svg"
              alt=""
            />
            <p className="tech-name">ReactJS</p>
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="220"
            data-aos-duration="1100"
          >
            <img
              className="tech-icons"
              src="../.././public/icons/javascript.svg"
              alt=""
            />
            <p className="tech-name">JavaScript</p>
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              className="tech-icons"
              src="../.././public/icons/typescript.svg"
              alt=""
            />
            <p className="tech-name">TypeScript</p>
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="220"
            data-aos-duration="1100"
          >
            <img
              className="tech-icons"
              src="../.././public/icons/html.svg"
              alt=""
            />
            <p className="tech-name">HTML5</p>
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              className="tech-icons"
              src="../.././public/icons/css.svg"
              alt=""
            />
            <p className="tech-name">CSS3</p>
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="220"
            data-aos-duration="1100"
          >
            <img
              className="tech-icons"
              src="../.././public/icons/git.svg"
              alt=""
            />
            <p className="tech-name">Git</p>
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              className="tech-icons"
              src="../.././public/icons/figma.svg"
              alt=""
            />
            <p className="tech-name">Figma</p>
          </span>
        </div>
        <button
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="2000"
          onClick={downloadFile}
          className="download-cv"
          onMouseEnter={() => setHovered(true)}
          style={styleBtn}
        >
          <i class="fa-solid fa-download"></i>Download CV
        </button>
        <NextPage to={'/projects'} />
      </div>
      <div
        className="second-content-home"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <a href="/about">
          <img
            className="photo"
            src="../../public/profile2.jpg"
            alt="Foto Washington Rodrigues"
          />
        </a>
      </div>
    </motion.header>
  );
}
