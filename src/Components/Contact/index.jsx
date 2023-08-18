export default function Contact() {
  return (
    <div>
      <h2>Contato</h2>
      <div>
        <div>
          <div>
            <h3>Redes Sociais</h3>
            <div>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-tiktok"></i>
            </div>
          </div>
          <div>
            <h3>E-mail</h3>
            <p>washington_sr_@hotmail.com</p>
          </div>
          <div>
            <h3>Telefone</h3>
            <p>+55 9 9921-6703</p>
          </div>
        </div>
        <form action="">
          <div>
            <label htmlFor="">Nome</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite seu nome e sobrenome"
            />
          </div>
          <div>
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Digite seu melhor e-mail"
            />
          </div>
          <div>
            <label htmlFor="">Telefone</label>
            <input type="tel" name="" id="" placeholder="DDD + Número" />
          </div>
          <div>
            <label htmlFor="">Mensagem</label>
            <input type="text" name="" id="" placeholder="Deixe sua mensagem" />
          </div>
        </form>
      </div>
    </div>
  );
}
