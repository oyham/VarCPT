import { Link } from "wouter";
import NavData from "./NavData"
import useShowMenu from '../hooks/useShowMenu.jsx'

const Header = () => {
    const { showMenu, toggleMenu } = useShowMenu()
    return (
        <header className="header">
            <nav className='nav'>
                <div className="header__tool">
                    <NavData showMenu={showMenu} toggleMenu={toggleMenu} />
                </div>
                <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
                    <ul className="nav__list">
                        <li className="nav-item link__acc">
                            <Link
                                href="/"
                                className="nav__link"
                                onClick={toggleMenu}
                            >
                                Mi Cuenta
                            </Link>
                            <Link
                                href="/"
                                className="nav__link login__link"
                                onClick={toggleMenu}
                            >
                                Iniciar sesión
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                href="/"
                                className="nav__link nav__link-fav"
                                onClick={toggleMenu}
                            >
                                <i className="ri-heart-fill"></i>
                                Mis favoritos
                            </Link>
                        </li>
                        <li className="nav-item nav__place">
                            <Link
                                href="/"
                                className="nav__link nav__place-link"
                                onClick={toggleMenu}
                            >
                                <i className="ri-map-pin-line"></i>
                                <span href="/">Origen</span>
                                <span href="/">Barcelona</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <ul className="nav__ul">
                                <li>
                                    <Link
                                        href="/"
                                        className="nav__link"
                                        onClick={toggleMenu}
                                    >
                                        <i className="ri-arrow-right-s-fill"></i>
                                        Hoteles
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="nav__link"
                                        onClick={toggleMenu}
                                    >
                                        <i className="ri-arrow-right-s-fill"></i>
                                        Vuelo + Hotel
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="nav__link"
                                        onClick={toggleMenu}
                                    >
                                        <i className="ri-arrow-right-s-fill"></i>
                                        Cruceros
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header >
    )
}

export default Header
