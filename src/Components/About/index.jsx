import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css'
import PreviousPage from '../PreviousPage';
import NextPage from '../NextPage';
import classNames from 'classnames';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classNames(styles.container_about)}
      style={{ position: 'relative' }}
    >
      <h2>Sobre mim</h2>
      <div className={classNames(styles.content_about)}>
        <div className={classNames(styles.text)}>
          <p>Olá! Meu nome é Washington Rodrigues, cursando Análise  e Desenvolvimento de Sistemas, sou um empreendedor de 26 anos natural de Aracaju, Sergipe, e noivo de Larissa Pinheiro. Minha jornada no mundo da tecnologia começou há apenas 10 meses, mas desde então, venho trilhando um caminho empolgante no desenvolvimento web.</p>
          <p>Nesses 10 meses, adquiri conhecimento em várias tecnologias e ferramentas, como ReactJs, JavaScript, TypeScript, CSS, Bootstrap, GIT, Figma entre outros. Atualmente, estou expandindo meu conhecimento para o back-end, estudando NodeJS com o objetivo de criar o site da loja que minha noiva e eu temos, a <a target='_blank' href="https://instagram.com/cartoonstore19">Cartoon Geek</a>. Além disso, por conta própria, iniciei meus estudos de inglês, visando futuramente buscar oportunidades internacionais como desenvolvedor.</p>
          <p>Minha jornada profissional inclui pouco mais de 03 meses como desenvolvedor front-end voluntário na Redgtech Automação, onde tive a oportunidade de criar sistemas web significativos. Estou atualmente em busca da minha primeira oportunidade como CLT, PJ ou até mesmo como estagiário. Uma das minhas maiores vantagens é minha facilidade de aprendizado e minha capacidade de me adaptar a diversas situações.</p>
          <p>Estou empolgado para continuar minha jornada no mundo da tecnologia, desenvolver minhas habilidades e criar soluções inovadoras. Se você está interessado em trabalhar comigo ou apenas deseja bater um papo sobre tecnologia, não hesite em entrar em contato.</p>
          <p>Vamos construir um futuro incrível juntos! <a href="/contact">Entrar em contato</a></p>
        </div>
        <img src="../../public/couple.jpg" alt="" className={classNames(styles.img_about)} />
      </div>
      <PreviousPage className={classNames(styles.previous_page_about)} to={'/experience'} />
      <NextPage className={classNames(styles.next_page_about)} to={'/contact'} />
    </motion.div>
  );
}
