import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/projects">
            Projetos
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/experiences">
            Experiências
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contato
          </NavLink>
        </li>
      </ul>
      <i onClick={toggleMenu} className="fa-solid fa-bars"></i>
    </nav>
  );
}
