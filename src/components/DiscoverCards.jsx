import React from 'react'
import cardImg1 from '/cardImg1.jpg'
import cardImg2 from '/cardImg2.jpg'
import cardImg3 from '/cardImg3.jpg'
import cardImg4 from '/cardImg4.jpg'
import cardImg5 from '/cardImg5.jpg'
import cardImg6 from '/cardImg6.jpg'

import "./DiscoverCards.css"

const getImage = (imageName) => {
    switch (imageName) {
        case '1':
            return cardImg1;
        case '2':
            return cardImg2;
        case '3':
            return cardImg3;
        case '4':
            return cardImg4;
        case '5':
            return cardImg5;
        case '6':
            return cardImg6;
        default:
            return null; // Devuelve null si no se encuentra la imagen
    }
};

const DiscoverCards = ({ cardImg, spanTitle, subtitle, text, loc }) => {
    const image = getImage(cardImg);

    return (
        <article className='card'>
            <div className='card__img-container'>
                <img src={image} alt="cardImg" />
                <span>
                    {spanTitle}
                </span>
            </div>

            <div className='card__info-container'>
                <div>
                    Recorrido: <br />
                    <b>
                        {subtitle}
                    </b>
                </div>
                <p>
                    {text}
                </p>
                {loc && (
                    <p>
                        Alojamiento en {loc}
                    </p>
                )}
            </div>

        </article>
    )
}

export default DiscoverCards
