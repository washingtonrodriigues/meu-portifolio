import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import PreviousPage from '../PreviousPage';
import NextPage from '../NextPage';
import projects from './data/projects.json'
import { Carousel } from 'react-bootstrap';
import classNames from 'classnames';

export default function Projects({ project }) {
  const [filterType, setFilterType] = useState('uiux');
  // const [width, setWidth] = useState(0)
  // const [click, setClick] = useState(false)
  // const carousel = useRef()

  // useEffect(() => {
  //   setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  // }, [])

  // const handleArrowClick = (direction) => {
  //   if (direction === 'left') {
  //     setClick(false);
  //   } else if (direction === 'right') {
  //     setClick(true);
  //   }
  // };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classNames(styles.container_projects)}
      style={{ position: 'relative' }}>
      <h2 data-aos="fade-right" data-aos-duration="1000">Projetos</h2>
      <div className={classNames(styles.content_projects)}>
        <div className={classNames(styles.select_project_type)} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <h3 >Selecione o tipo de projeto:</h3>
          <select
            name=""
            id="filterTypeProject"
            className={classNames(styles.filterTypeProject)}
            value={filterType}
            onChange={(ev) => setFilterType(ev.target.value)}>
            <option value="uiux">UI/UX</option>
            <option value="frontend">Front-end</option>
          </select>
        </div>
        <div className={`projects-slide ${classNames(styles.carousel)}`} data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
          {filterType === 'uiux' ? (
            <Carousel
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={classNames([styles.projects_uiux], [styles.inner])}>
              {projects
                .filter((project) => project.type === 'UI/UX Design')
                .map((project, index) => (
                  <Carousel.Item className={classNames(styles.project)} key={index}>
                    <img className={`d-block ${classNames(styles.img_carousel)}`} src={project.image} alt={project.title} />
                    <Carousel.Caption className={classNames(styles.project_text)} style={{ marginBottom: '30px' }}>
                      <h3>{project.title}</h3>
                      <p className={classNames([styles.p_project], [styles.p_description])}>{project.description}</p>
                      <p className={classNames(styles.p_project)}>
                        Ferramentas:<span> {project.technologies.join(', ')}</span>
                      </p>
                      <p className={classNames(styles.p_project)}>
                        Visualizar: <a target='_blank' href={project.link}>Clique aqui</a>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
            </Carousel>
          ) : (
            <Carousel
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={classNames([styles.projects_frontend], [styles.inner])}>
              {projects
                .filter((project) => project.type === 'Front-end')
                .map((project, index) => (
                  <Carousel.Item className={classNames(styles.project)} key={index}>
                    <img className={`d-block ${classNames(styles.img_carousel)}`} src={project.image} alt={project.title} />
                    <Carousel.Caption className={classNames(styles.project_text)}>
                      <h3>{project.title}</h3>
                      <p className={classNames([styles.p_project], [styles.p_description])}>{project.description}</p>
                      <p className={classNames(styles.p_project)}>
                        Ferramentas:<span> {project.technologies.join(', ')}</span>
                      </p>
                      <p className={classNames(styles.p_project)}>
                        Visualizar: <a target='_blank' href={project.link}>Clique aqui</a>
                      </p>
                      <p className={classNames(styles.p_project)}>
                        Repositório: <a target='_blank' href={project.repository}>Clique aqui</a>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
            </Carousel>
          )}
        </div>
      </div>
      <PreviousPage className={classNames(styles.previous_page_projects)} to={'/'} />
      <NextPage className={classNames(styles.next_page_projects)} to={'/experience'} />
    </motion.div>
  );
}
