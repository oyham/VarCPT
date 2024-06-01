import Discover from './Discover'
import mainIMG from '/mainIMG.jpg'
import mainLogo from '/vcpt2.jpg'
const Main = () => {
  return (
    <main>
      <div className='main__img-container'>
        <picture className='main__picture'>
          <img src={mainIMG} alt="main img" className='main__img' />
          <img src={mainLogo} alt="main logo" className='main__logo' />
        </picture>
      </div>

      <section className='container main__section'>
        <h2>
          ALEMANIA
          <br />
          Ruta Romántica
        </h2>
        <div>
          <b>
            Una ruta rica en cultura e historia, en la que se enfilan como perlas en un cordón ciudades medievales, casas de paredes entramadas, castillos, fortalezas, suaves paisajes de colinas y viñedos.
          </b>
          <p>
            Un viaje por un país abierto, amistoso y estrechamente unido a la historia europea.
          </p>
        </div>
      </section>
      <Discover />
    </main>
  )
}

export default Main
