import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import classNames from 'classnames';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={classNames(styles.navbar)}>
      <a href="/" className={classNames(styles.a_logo)}>
        <img
          className={classNames(styles.logo)}
          src="/logo-wr2.png"
          alt="Logo Washington Rodrigues"
        />
      </a>
      <ul
        style={{
          opacity: windowWidth <= 768 && !isMenuOpen ? '0' : '1',
          zIndex: isMenuOpen ? '9999' : '',
          backgroundColor: isMenuOpen ? '#0a0a0af3' : ''
        }}
        className={classNames(styles.nav_list)}
      >
        {console.log(isMenuOpen)}
        <li>
          <NavLink exact className={classNames([styles.link], location.pathname === '/' ? styles.active : '')} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={classNames([styles.link], location.pathname === '/projects' ? styles.active : '')} to="/projects">
            Projetos
          </NavLink>
        </li>
        <li>
          <NavLink className={classNames([styles.link], location.pathname === '/experience' ? styles.active : '')} to="/experience">
            Experiência
          </NavLink>
        </li>
        <li>
          <NavLink className={classNames([styles.link], location.pathname === '/about' ? styles.active : '')} to="/about">
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink className={classNames([styles.link], location.pathname === '/contact' ? styles.active : '')} to="/contact">
            Contato
          </NavLink>
        </li>
      </ul>
      <i onClick={toggleMenu} className={`fa-solid fa-bars ${classNames(styles.fa_bars)}`}></i>
    </nav>
  );
}
