import React, { useState } from 'react';
import { motion } from 'framer-motion';
import experiences from './data/exp.json'
import styles from './styles.module.css'
import classNames from 'classnames';
import Skills from './Skills';
import PreviousPage from '../PreviousPage';
import NextPage from '../NextPage';

export default function Experience() {
  const [hoveredCards, setHoveredCards] = useState(Array(experiences.length).fill(false));

  const handleMouseEnter = (index) => {
    const newHoveredCards = [...hoveredCards];
    newHoveredCards[index] = true;
    setHoveredCards(newHoveredCards);
  };

  const handleMouseLeave = (index) => {
    const newHoveredCards = [...hoveredCards];
    newHoveredCards[index] = false;
    setHoveredCards(newHoveredCards);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classNames(styles.container_exp)}
    >
      <div>
        <h2 className={classNames(styles.h2_exp)}>Experiência</h2>
        {experiences.map((experience, index) => (
          <a href={experience.link} target='_blank' className={classNames(styles.div_exp)}>
            <div key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)} className={classNames(styles.exp_card)}>
              <p>{experience.start} - {experience.end}</p>
              <div>
                <div className={classNames(styles.exp_card_header)}>
                  <h3 style={{ color: hoveredCards[index] ? 'var(--color-purple)' : '' }}>{experience.company}<i style={{ fontSize: hoveredCards[index] ? '16px' : '' }} className="bi bi-arrow-up-right"></i></h3>
                  <p>{experience.office}</p>
                </div>
                <p className={classNames(styles.exp_card_description)}>{experience.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className={classNames(styles.div_skills)}>
        <h2 className={classNames(styles.h2_skills)}>Competências</h2>
        <Skills />
      </div>
      <PreviousPage to={"/projects"} />
      <NextPage to={"/about"} />
    </motion.div>
  );
}
