import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from './style.css';
import PreviousPage from '../PreviousPage';
import NextPage from '../NextPage';

export default function Projects() {
  const [filterType, setFilterType] = useState('uiux');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <h2>Projetos</h2>
      <div className="content-projects">
        <select
          name=""
          id="filterTypeProject"
          value={filterType}
          onChange={(ev) => setFilterType(ev.target.value)}
        >
          <option value="uiux">UI/UX</option>
          <option value="frontend">Front-end</option>
        </select>
        {filterType === 'uiux' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="projects-uiux"
          >
            <div className="project">
              <img src="../../public/projects-img/cartoonsite.png" alt="" />
            </div>
            <div className="project">
              <img src="../../public/projects-img/storesystem.png" alt="" />
            </div>
          </motion.div>
        ) : (
          <div className="projects-frontend">
            <div className="project">
              <img src="../../public/projects-img/redgtechproject.png" alt="" />
            </div>
            <div className="project">
              <img src="../../public/projects-img/pizzaproject.png" alt="" />
            </div>
          </div>
        )}
      </div>

      <PreviousPage className="prev-page" to={'/'} />
      <NextPage to={'/experiences'} />
    </motion.div>
  );
}
