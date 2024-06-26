import "./NavData.css";
import { Link } from "wouter";
import Logo from "/vcptlogo.png"


const NavData = ({ showMenu, toggleMenu }) => {
  return (
    <div className="nav__data">
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.0.0/fonts/remixicon.css"
        rel="stylesheet"
      ></link>
      <Link href="/" className="nav__logo">
        <img src={Logo} alt="logo" className="img__nav-logo"></img>
      </Link>

      <div className="i__container">
        <div>
          <button className="i__button-contact">
            <i class="ri-phone-line"></i>
            <i class="ri-arrow-drop-down-line"></i>
          </button>
          <div className="i__number-contact">
            <span>932 08 70 00</span>
            <span>Agencias de Viajes</span>
          </div>
        </div>
        <div
          className={`nav__toggle ${showMenu ? "show-icon" : ""}`}
          onClick={toggleMenu}
        >
          <i className="ri-menu-line nav__toggle-menu"></i>
          <i className="ri-close-line nav__toggle-close"></i>
        </div>
      </div>
    </div>
  );
};

export default NavData;
