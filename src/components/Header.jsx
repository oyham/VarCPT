import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="header__main">
                <div className="header__main-logo">
                    <a href="#" className="header__a-logo">
                        <picture>
                            <img src="" alt="" className="img__logo" />
                        </picture>
                    </a>
                </div>
                <div className="header__tool">
                    <div className="header__tool-item"></div>
                    <div className="header__tool-toogle">
                        <button className="header__btn">X</button>
                    </div>
                </div>
            </div>
            <nav className="header__nav">
                <ul className='header__nav-ul'>
                    <li>Li's</li>
                    <li>Li's</li>
                    <li>Li's</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
