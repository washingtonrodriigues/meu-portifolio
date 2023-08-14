import React, { useState, useEffect } from 'react';
import style from './styles.css';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <nav className="navbar">
      <img
        className="logo"
        src="../.././public/logo-wr2.png"
        alt="Logo Washington Rodrigues"
      />
      <ul
        style={{
          opacity: windowWidth <= 768 && !isMenuOpen ? '0' : '1',
        }}
        className="nav-list"
      >
        {console.log(isMenuOpen)}
        <li>
          <a className="a-selected" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Experiências</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
      <i onClick={toggleMenu} className="fa-solid fa-bars"></i>
    </nav>
  );
}
