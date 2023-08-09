import React from 'react';
import style from './styles.css';

export default function Menu() {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="../.././public/logo-wr2.png"
        alt="Logo Washington Rodrigues"
      />
      <ul className="nav-list">
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
    </nav>
  );
}
