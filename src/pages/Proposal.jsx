import proposalFooterIMG from "/vcptfooter2.jpg";
const Proposal = () => {
  return (
    <section className="section container">
      <div className=" proposal__container">
        <div className="proposal__info">
          <article className="proposal__data">
            <h3>6 días / 5 noches</h3>
            <ul>
              <li className="proposal__data-info">
                <strong>
                  Vuelos Barcelona - Frankfurt // Munich - Barcelona
                </strong>
              </li>
              <li>+ Alquiler de coche</li>
              <li>+ 1 Noche en Würzburg</li>
              <li>+ 1 Noche en Rothenburg</li>
              <li>+ 1 Noche en Augsburg</li>
              <li>+ 2 Noches en Halblech</li>
              <li>+ Seguro de Viaje</li>
            </ul>
            <div>
              <p>
                Desde <span className="proposal__price">990€ </span> por persona
              </p>
            </div>
          </article>
        </div>

        <div className="proposal__more-info">
          <button onClick={() => alert("Alert")}>+ Info aquí</button>
        </div>
      </div>

      <picture className="proposal__img-container">
        <img src={proposalFooterIMG} alt="proposal footer img" />
      </picture>
    </section>
  );
};

export default Proposal;
