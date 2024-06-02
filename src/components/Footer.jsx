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
          <span>Ver información básica sobre protección de datos <i className="ri-arrow-down-s-line"></i></span>
        </div>
      </section>

      <picture>
        <img src={logoFooter} alt="img__logo-footer" />
      </picture>
    </footer>
  );
};

export default Footer;
