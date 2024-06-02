import DiscoverCards from '../components/DiscoverCards'

const Discover = () => {
    return (
        <section className='section'>
            <h2 className='discover__title'>
                Descubre naturaleza, cultura, arte, delicias culinarias y hospitalidad en la ruta vacacional
                más antigua y popular de Alemania de <br />
                <span className='mct'>Würzburg a Füssen</span>
                <br />
                ¡460 Kilómetros de puro romanticismo!
            </h2>

            <article className='cards__container'>
                <DiscoverCards cardImg={"1"} spanTitle="Día 1: De Barcelona a Würzburg" subtitle="Barcelona - Frankfurt / Würzburg (119 Km)" text="Salida en vuelo a Frankfurt. Llegada y recogida del coche de alquiler en el aeropuerto. Salida hacia Würzburg, centro de la región vinícola de la Franconia, famosa por sus vinos tintos y blancos en sus especiales botellas redondas, recorre el centro histórico de Würzburg, y disfruta de una copa de vino (Brückenschoppen) en la taberna Alte Mainmühle, con hermosas vistas a los viñedos del castillo." loc="Würzburg." />
                <DiscoverCards cardImg={"2"} spanTitle="Día 2: De Würzburg a Rothenburg" subtitle="Würzburg - Wertheim / Bad Mergentheim / Weikersheim / Rothenburg (137 Km)" text="Salida hacia Wertheim Village, centro comercial, con tiendas outlet de varias marcas, para ir de compras. Sigue hacia el valle del Tauber pasando por Bad Mergentheim, ciudad balnearia a orillas del río Tauber, y por Weikersheim, donde descubrirás la encantadora plaza del mercado y el castillo renacentista con su sala de caballeros y el jardín barroco, continua hasta llegar a Rothenburg, recorre su casco antiguo salpicado de rincones con encanto, la torre del Ayuntamiento desde donde se ve el pintoresco valle de Tauber, las iglesias, y su muralla medieval perfectamente conservada." loc="Rothenburg." />
                <DiscoverCards cardImg={"3"} spanTitle="Día 3: De Rothenburg a Augsburg" subtitle="Rothenburg - Dinkelsbühl / Feuchtwangen / Nördlingen / Harburg / Donauwörth / Rain / Augsburg (170 Km)" text='Salida hacia Dinkelsbühl, antigua ciudad imperial con murallas y casas medievales de colores, pasando por Feuchtwangen, pasea desde la plaza del mercado hasta la colegiata, pasando por el claustro romano, y sigue hasta Nördlingen, ciudad que esconde toneladas de diamantes y que fue construida en el cráter del impacto de un meteorito. Por la tarde, visita al castillo de Harburg y sigue hacia Augsburg pasando por Donauwörth, una de las ciudades más románticas de la región y conocida, no en vano, como "la perla del Danubio", y Rain, donde podrás admirar el milagro floral en el Parque de las Flores Dehner, o tomarte un café a la sombra del monumento de Tilly, rodeado de casas protegidas por la declaración de monumentos históricos y con vistas al Ayuntamiento de estilo rococó. Continuaremos hasta llegar a Augsburg.' loc="Augsburg." />
                <DiscoverCards cardImg={"4"} spanTitle="Día 4: De Augsburg a Halblech" subtitle="Augsburg - Friedberg / Landsberg / Pfaffenwinkel / Wieskirche / Halblech (149 Km)" text="Visita la ciudad de Augsburg, con sus magníficas fuentes, casas gremiales, hermosas iglesias, pintorescos pubs del centro histórico, etc. Almuerza en el mercado (cerrado los domingos) y continúa tu viaje hacia Friedberg, piérdete por las callejuelas recónditas con sus antiguas casas de relojeros, sigue hasta el castillo de Wittelsbach y relájate en el lago. A continuación seguiremos por la región de Pfaffenwinkel, admirando los hermosos paisajes, que se extiende desde Landsberg, donde realizaremos una breve parada para pasear por la plaza mayor y descubre la fuente Marienbrunnen, donde palpita la vida a diario, hasta la iglesia de Wies (Wieskirche), en la localidad de Steingaden, lugar de peregrinación y una de las iglesias rococó más famosas del mundo. Este santuario pertenece a la Unesco desde 1983. Continua hasta Halblech." loc="Halblech." />
                <DiscoverCards cardImg={"5"} spanTitle="Día 5: Halblech" subtitle="Halblech / Buchenberg / Hohenschwangau / Neuschwanstein / Halblech (117 Km)" text="Subida en telesilla al monte Buchenberg por la mañana para admirar las maravillosas vistas que regala desde la cima. Por la tarde, visita al castillo de Hohenschwangau y de Neuschwanstein, que sirvió de inspiración para el palacio del cuento de La Cenicienta de Disney. Continuaremos hacia Halblech un paraíso entre castillos y lagos." loc="Halblech." />
                <DiscoverCards cardImg={"6"} spanTitle="Día 6: De Halblech a Barcelona" subtitle="Halblech - Füssen / Múnich (130 Km) / Barcelona" text="Por la mañana, visita Füssen, ciudad a orillas del río Lech, al pie de los Alpes, y un final perfecto que resume los 413 km entre el Meno y los Alpes, impresionantes paisajes, senderos, montañas, lagos, castillos y su centro histórico… A continuación, traslado al aeropuerto de Múnich, devolución del coche de alquiler y vuelo de regreso a Barcelona"/>
            </article>

            <div>
                <p>*Posibilidad de añadir mas noches.</p>
                <p>**Constultar salidas desde otras ciudades.</p>
            </div>

            <div className='warning__container'>
                <b>¡Atención!</b>
                <p>No utilizar durante el viaje por la Ruta Romántica ningún instrumento de navegación, ya que no funcionan correctamente, y la gente se pierde.</p>
            </div>
        </section>
    )
}

export default Discover
