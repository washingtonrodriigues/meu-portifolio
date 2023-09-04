import styles from './styles.css';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <h2>Contato</h2>
      <div className="content">
        <div className="first-content">
          <div className="social-medias">
            <h3>Redes Sociais</h3>
            <div className="social-medias-icons">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/washington-rodrigues-575162255/"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a target="_blank" href="https://github.com/washingtonrodriigues">
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/washrodrigues_/"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@washingtonrodrigues_"
              >
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
          <div className="email">
            <h3>E-mail</h3>
            <div>
              <i className="fa-regular fa-envelope"></i>
              <a href="mailto:washington_sr_@hotmail.com">
                washington_sr_@hotmail.com
              </a>
            </div>
          </div>
          <div className="phone">
            <h3>Telefone</h3>
            <div>
              <i className="fa-brands fa-whatsapp"></i>
              <a target="_blank" href="https://wa.me/5579999216703">
                +55 79 9 9921-6703
              </a>
            </div>
          </div>
        </div>
        <form className="second-content" action="">
          <div className="input">
            <label htmlFor="">Nome</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite seu nome e sobrenome"
            />
          </div>
          <div className="input">
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Digite seu melhor e-mail"
            />
          </div>
          <div className="input">
            <label htmlFor="">Telefone</label>
            <input type="tel" name="" id="" placeholder="DDD + Número" />
          </div>
          <div className="input">
            <label htmlFor="">Mensagem</label>
            <input
              type="text"
              name=""
              id="message"
              placeholder="Deixe sua mensagem"
            />
          </div>
          <button className="send-btn" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </motion.div>
  );
}
