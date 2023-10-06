import React from 'react';
import { motion } from 'framer-motion';
import experiences from './data/exp.json'
import styles from './styles.module.css'
import classNames from 'classnames';

export default function Experiences() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classNames(styles.container_exp)}
    >
      <div>
        <h2 className={classNames(styles.h2_title)}>Experiências</h2>
        <div className={classNames(styles.div_exp)}>
          {experiences.map((experience, index) => (

            <div className={classNames(styles.exp_card)}>
              <p>{experience.start} - {experience.end}</p>
              <div>
                <div className={classNames(styles.exp_card_header)}>
                  <h3>{experience.company}</h3>
                  <p>{experience.office}</p>
                </div>
                <p className={classNames(styles.exp_card_description)}>{experience.description}</p>
              </div>
            </div>
            // <div key={index} className={classNames(styles.card_exp)}>
            //   <h3 className={classNames(styles.card_header)}>{experience.company}</h3>
            //   <div>
            //     <h4>{experience.office}</h4>
            //     <p>
            //       {experience.description}
            //     </p>
            //     <p>
            //       {experience.technologies}
            //     </p>
            //   </div>
            //   <footer>
            //     {experience.start}{experience.end}
            //   </footer>
            // </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className={classNames(styles.h2_title)}>Competências</h2>
      </div>
    </motion.div>
  );
}
