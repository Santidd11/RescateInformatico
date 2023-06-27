import React from 'react';
import logo from "../assets/logos/Logo-removebg-preview.png"
import letras from "../assets/logos/Titulo-removebg-preview.png"
import "./NavBar.css"

const Navbar = () => {
    return (
        <nav className="my-navbar">
          <div className="my-logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="my-nav-links mb-0">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Acerca de</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      );
    };

export default Navbar;
