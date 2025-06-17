import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-moderno">
      <div className="header-container">
        <h1>Meu Portfólio</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><NavLink to="/" onClick={toggleMenu}><i className="fas fa-home"></i> Home</NavLink></li>
            <li><NavLink to="/sobre" onClick={toggleMenu}><i className="fas fa-user"></i> Sobre Mim</NavLink></li>
            <li><NavLink to="/formacao" onClick={toggleMenu}><i className="fas fa-graduation-cap"></i> Formação</NavLink></li>
            <li><NavLink to="/portfolio" onClick={toggleMenu}><i className="fas fa-briefcase"></i> Portfólio</NavLink></li>
            <li><NavLink to="/contato" onClick={toggleMenu}><i className="fas fa-envelope"></i> Contato</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
