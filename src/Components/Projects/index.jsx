import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from './style.css';
import PreviousPage from '../PreviousPage';
import NextPage from '../NextPage';
import projects from './data/projects.json'
import { right } from '@popperjs/core';

export default function Projects({ project }) {
  const [filterType, setFilterType] = useState('uiux');
  const [width, setWidth] = useState(0)
  const [click, setClick] = useState(false)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setClick(false);
    } else if (direction === 'right') {
      setClick(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <h2>Projetos</h2>

      <div className='next-previous'>
        <i class="fa-solid fa-angle-left" onClick={() => handleArrowClick('left')}></i>
        <i class="fa-solid fa-angle-right" onClick={() => handleArrowClick('right')}></i>
      </div>

      <div className="content-projects">
        <div className='select-project-type'>
          <h3 >Selecione o tipo de projeto:</h3>
          <select
            name=""
            id="filterTypeProject"
            value={filterType}
            onChange={(ev) => setFilterType(ev.target.value)}
          >
            <option value="uiux">UI/UX</option>
            <option value="frontend">Front-end</option>
          </select>
        </div>
        <div ref={carousel} className='projects-slide carousel'>
          {filterType === 'uiux' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="projects-uiux inner"
              style={{
                transform: click ? `translateX(-${width}px)` : 'translateX(0)',
                transition: 'transform 0.5s',
              }}
            >


              {projects
                .filter((project) => project.type === 'UI/UX Design')
                .map((project, index) => (
                  <div className="project" key={index}>
                    <img src={project.image} alt={project.title} />
                    <div className='project-text'>
                      <h3>{project.title}</h3>
                      <p c>{project.description}</p>
                      <p className='p-project'>
                        Ferramentas:<span> {project.technologies.join(', ')}</span>
                      </p>
                      <p className='p-project'>
                        Visualizar: <a target='_blank' href={project.link}>Clique aqui</a>
                      </p>
                    </div>
                  </div>
                ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="projects-frontend inner"
              style={{
                transform: click ? `translateX(-${width}px)` : 'translateX(0)',
                transition: 'transform 0.5s',
              }}
            >

              {projects
                .filter((project) => project.type === 'Front-end')
                .map((project, index) => (
                  <div className="project" key={index}>
                    <img src={project.image} alt={project.title} />
                    <div className='project-text'>
                      <h3>{project.title}</h3>
                      <p className='description'>{project.description}</p>
                      <p className='p-project'>
                        Tecnologias:<span> {project.technologies.join(', ')}</span>
                      </p>
                      <p className='p-project'>
                        Visualizar: <a target='_blank' href={project.link}>Clique aqui</a>
                      </p>
                      <p className='p-project'>
                        Repositório: <a target='_blank' href={project.repository}>Clique aqui</a>
                      </p>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </div>
      </div>

      <PreviousPage className="prev-page" to={'/'} />
      <NextPage to={'/experiences'} />
    </motion.div>
  );
}
