import style from './style.css';

export default function Home() {
  return (
    <header>
      <div className="first-content">
        <div className="title">
          <h2 className="welcome-title">Seja bem-vindo(a)!</h2>
          <h1 className="name-title">Washington Rodrigues</h1>
          <h2 className="title-title">
            Desenvolvedor Front-end e UI/UX Designer
          </h2>
        </div>
        <ul className="contact-links">
          <li>
            <a href="#">
              <i class="fa-regular fa-envelope"></i>washington_sr_@hotmail.com
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-whatsapp"></i>+55 79 9 9921-6703
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-solid fa-location-dot"></i>Aracaju, Sergipe - Brasil
            </a>
          </li>
        </ul>
      </div>
      <div className="second-content">
        <img
          className="photo"
          src="../../public/profile.jpg"
          alt="Foto Washington Rodrigues"
        />
      </div>
    </header>
  );
}
