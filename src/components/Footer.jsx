import logoFooter from "/vcptfooter-logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="section footer__container">
      <section className="newsletter">
        <div>
          <h3>Grandes viajes en tu bandeja de entrada</h3>
          <p className="newsletter__subtitle">
            Grandes ideas para tus próximos viajes, los mejores destinos y
            excelentes ofertas, tan solo tienes que darte de alta.
          </p>

          <form action="">
            <input type="text" placeholder="EMAIL" />
            <input type="submit" name="submit" value="SUSCRÍBETE" />
          </form>
          <p className="newsletter__auth">
            Autorizo el uso de mis datos para todos los fines detallados en la
            política de privacidad salvo en aquellos supuestos que nos indique
            lo contrario marcando la casilla correspondiente:
          </p>

          <div className="newsletter__radio-container">
            <p>
              Racctravel pertenece al grupo de empresas turísticas Ávoris, ¿te
              interesa que compartamos sus datos con otras sociedades del grupo
              para que puedan enviarte comunicaciones comerciales sobre sus
              productos y/o servicios?
            </p>
            <div className="newsletter__labels">
              <label htmlFor="">
                <input type="radio" name="si" id="" />
                Sí
              </label>
              <label htmlFor="">
                <input type="radio" name="no" id="" />
                No
              </label>
            </div>
          </div>
          <span>
            Ver información básica sobre protección de datos{" "}
            <i className="ri-arrow-down-s-line"></i>
          </span>
        </div>
      </section>

      <section className="section container about__container">
        <article className="about__ul-container">
          <h3>SOBRE NOSOTROS</h3>
          <div className="about__ul">
            <ul>
              <li>Avoris</li>
              <li>Condiciones Generales</li>
              <li>Protección de detos</li>
              <li>Política de cookies</li>
              <li>Política de privacidad</li>
              <li>Póliza de insolvencia</li>
              <li>Blog</li>
              <li>Bases Legales Campaña Caribe</li>
              <li>Bases Legales Campaña Venta Anticipada 2024</li>
              <li>Bases Legales Campaña Circuitos por Europa hasta 15%</li>
              <li>Bases Legales Campaña MGM</li>
              <li>Trabaja con nosotros</li>
              <li>Canal Denuncias</li>
            </ul>
          </div>
        </article>

        <article className="about__follow">
          <span>¡Síguenos!</span>
          <label htmlFor="">Llámanos al 932 08 70 00</label>
          <label htmlFor="">De Lunes a Viernes de 09:00 a 19:00 h</label>
          <label htmlFor="">Email de atención al viajero: </label>
          <bold className="mail">viatges.atv-fono@racctravel.com</bold>
        </article>
      </section>

      <picture>
        <img src={logoFooter} alt="img__logo-footer" />
        <p>
        © Sextante Viajes S.L. AVBAL/780 con C.I.F. B57797813
        </p>
      </picture>
    </footer>
  );
};

export default Footer;
