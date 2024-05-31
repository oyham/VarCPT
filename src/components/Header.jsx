import { Link } from "wouter";
import NavData from "./NavData"
import useShowMenu from '../hooks/useShowMenu.jsx'

const Header = () => {
    const { showMenu, toggleMenu } = useShowMenu()
    return (
        <header className="header">
            <nav className='nav container'>
                <div className="header__tool">
                    <NavData showMenu={showMenu} toggleMenu={toggleMenu} />
                </div>
                <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
                    <ul className="nav__list">
                        <li className="nav-item link__acc">
                            <Link
                                href="/"
                                className="section__proyects nav__link"
                                onClick={toggleMenu}
                            >
                                Mi Cuenta
                            </Link>
                            <Link
                                href="/"
                                className="section__proyects nav__link login__link"
                                onClick={toggleMenu}
                            >
                                Iniciar sesión
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/"
                                className="section__proyects nav__link"
                                onClick={toggleMenu}
                            >
                                Mis favoritos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/"
                                className="section__proyects nav__link"
                                onClick={toggleMenu}
                            >
                                <span>Origen</span>
                                <span>Barcelona</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <ul>
                                <li>
                                    <Link
                                        href="/"
                                        className="section__proyects nav__link"
                                        onClick={toggleMenu}
                                    >
                                        Hoteles
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="section__proyects nav__link"
                                        onClick={toggleMenu}
                                    >
                                        Vuelos
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="section__proyects nav__link"
                                        onClick={toggleMenu}
                                    >
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
