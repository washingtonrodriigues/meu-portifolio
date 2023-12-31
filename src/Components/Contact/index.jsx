import { useState } from 'react';
import PreviousPage from '../PreviousPage';
import styles from './styles.module.css';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import classNames from 'classnames';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(ev) {
    ev.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      phone: phone,
    };

    emailjs
      .send(
        'service_81a3wmc',
        'template_tissj39',
        templateParams,
        'wLLFYnlEh8R-DbmvE',
      )
      .then(
        (response) => {
          toast.success('E-mail enviado com sucesso!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          console.log(response.status, response.text);
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        },
        (err) => {
          toast.success('Não foi possível enviar o e-mail!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          console.log(err);
        },
      );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classNames(styles.container_contact)}
      style={{ position: 'relative' }}
    >
      <h2>Contato</h2>
      <div className={classNames(styles.content_contact)}>
        <div className={classNames(styles.first_content_contact)}>
          <div className={classNames(styles.social_medias)}>
            <h3>Redes Sociais</h3>
            <div className={classNames(styles.social_medias_icons)}>
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
          <div className={classNames(styles.email)}>
            <h3>E-mail</h3>
            <div>
              <i className={`fa-regular fa-envelope ${classNames(styles.fa_icon)}`}></i>
              <a className={classNames(styles.link_contact)} href="mailto:washington_sr_@hotmail.com">
                washington_sr_@hotmail.com
              </a>
            </div>
          </div>
          <div className={classNames(styles.phone)}>
            <h3>Telefone</h3>
            <div>
              <i className={`fa-brands fa-whatsapp ${classNames(styles.fa_icon)}`}></i>
              <a className={classNames(styles.link_contact)} target="_blank" href="https://wa.me/5579999216703">
                +55 79 9 9921-6703
              </a>
            </div>
          </div>
        </div>
        <form className={classNames(styles.second_content_contact)} onSubmit={sendEmail}>
          <p className={classNames(styles.form_title)}><span></span>Entrar em contato</p>
          <div className={classNames(styles.input)}>
            <label htmlFor="">Nome</label>
            <input
              required
              type="text"
              name=""
              id=""
              placeholder="Digite seu nome e sobrenome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className={classNames(styles.input)}>
            <label htmlFor="">E-mail</label>
            <input
              required
              type="email"
              name=""
              id=""
              placeholder="Digite seu melhor e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className={classNames(styles.input)}>
            <label htmlFor="">Telefone</label>
            <input
              required
              type="tel"
              name=""
              id=""
              maxLength={11}
              placeholder="DDD + Número"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className={classNames(styles.input)}>
            <label htmlFor="">Mensagem</label>
            <textarea
              required
              name="message"
              className={classNames(styles.message)}
              cols="30"
              rows="3"
              placeholder="Mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <input className={classNames(styles.send_btn)} type="submit" value="Enviar" />
        </form>
      </div>
      <PreviousPage className={classNames(styles.previous_page_contact)} to={'/about'} />
    </motion.div>
  );
}
