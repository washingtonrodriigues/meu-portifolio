import styles from './styles.module.css';
import { motion } from 'framer-motion';
import NextPage from '../NextPage';
import { useState } from 'react';
import classNames from 'classnames';

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const styleBtn = {
    transition: hovered ? '.3s' : '',
  };
  function downloadFile() {
    const googleDriveFileLink =
      'https://drive.google.com/u/1/uc?id=1XvpuvxuKZDL2K78yd6F1iG3B8ednkLo6&export=download';
    window.open(googleDriveFileLink);
  }
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classNames(styles.home)}
      style={{ position: 'relative' }}
    >
      <div className={classNames(styles.first_content_home)}>
        <div className={classNames(styles.title)}>
          <h1 className={classNames(styles.name_title)}>Washington Rodrigues</h1>
          <h2 className={classNames(styles.title_title)}>
            Desenvolvedor Front-end
          </h2>
          <p className={classNames(styles.p_bio)} data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
            Utilizando o ReactJs como principal tecnologia juntamente com as
            noções de UI/UX, me dedico à criação de aplicações web sofisticadas
            e altamente responsivas, com foco na experiência do usuário. Busco
            oferecer soluções que não apenas atendam às necessidades, mas também
            encantem os usuários.
          </p>
        </div>
        <div className={classNames(styles.technologies)}>
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              className={classNames(styles.tech_icons)}
              src="/react.svg"
              alt=""
            />
            <p className={classNames(styles.tech_name)}>ReactJS</p>
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="220"
            data-aos-duration="1100"
          >
            <img
              className={classNames(styles.tech_icons)}
              src="/javascript.svg"
              alt=""
            />
            <p className={classNames(styles.tech_name)}>JavaScript</p>
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              className={classNames(styles.tech_icons)}
              src="/typescript.svg"
              alt=""
            />
            <p className={classNames(styles.tech_name)}>TypeScript</p>
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="220"
            data-aos-duration="1100"
          >
            <img
              className={classNames(styles.tech_icons)}
              src="/html.svg"
              alt=""
            />
            <p className={classNames(styles.tech_name)}>HTML5</p>
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              className={classNames(styles.tech_icons)}
              src="/css.svg"
              alt=""
            />
            <p className={classNames(styles.tech_name)}>CSS3</p>
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="220"
            data-aos-duration="1100"
          >
            <img
              className={classNames(styles.tech_icons)}
              src="/git.svg"
              alt=""
            />
            <p className={classNames(styles.tech_name)}>Git</p>
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              className={classNames(styles.tech_icons)}
              src="/figma.svg"
              alt=""
            />
            <p className={classNames(styles.tech_name)}>Figma</p>
          </span>
        </div>
        <button
          data-aos={window.innerWidth > '425px' ? "fade-right" : ''}
          data-aos-delay="200"
          data-aos-duration="2000"
          onClick={downloadFile}
          className={classNames(styles.download_cv)}
          onMouseEnter={() => setHovered(true)}
          style={styleBtn}
        >
          <i style={{ backgroundColor: 'transparent' }} class="fa-solid fa-download" ></i>Download CV
        </button>
      </div>
      <div
        className={classNames(styles.second_content_home)}
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <a href="/about">
          <img
            className={classNames(styles.photo)}
            src="/profile2.jpg"
            alt="Foto Washington Rodrigues"
          />
        </a>
      </div>
      <NextPage className={classNames(styles.next_page_home)} to={'/projects'} />
    </motion.header>
  );
}
