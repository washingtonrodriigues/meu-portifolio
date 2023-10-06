import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-bootstrap';
import experiences from './data/exp.json'
import styles from './styles.module.css'
import classNames from 'classnames';
import { Card } from 'react-bootstrap';

export default function Experiences() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classNames(styles.container_exp)}
    >
      <h2>Experiências</h2>
      <Carousel className={classNames(styles.carousel_exp)}>
        {experiences.map((experience, index) => (
          <Card key={index} className={classNames(styles.carousel_item_exp)}>
            <Card.Header as="h5">{experience.company}</Card.Header>
            <Card.Body>
              <Card.Title>{experience.office}</Card.Title>
              <Card.Text>
                {experience.description}
              </Card.Text>
              <Card.Text>
                {experience.technologies}
              </Card.Text>
            </Card.Body>
            <footer>
              {experience.start}{experience.end}
            </footer>
          </Card>
        ))}
      </Carousel>
    </motion.div>
  );
}
