import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ativa a animação após um pequeno atraso
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="home-container">
      <div className={`profile-card ${isLoaded ? 'loaded' : ''}`}>
        <img src="/FotoPerfil.png" alt="Minha foto de perfil" className="home-profile-img" />
        <h1>Álvaro Amaral</h1>
        <p className="tagline">Estudante de Engenharia de Software na Uninter</p>
        
        <div className="navigation-buttons">
          <Link to="/sobre" className={`nav-button ${isLoaded ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>Sobre Mim</Link>
          <Link to="/formacao" className={`nav-button ${isLoaded ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>Formação Educacional</Link>
          <Link to="/portfolio" className={`nav-button ${isLoaded ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>Portfólio</Link>
          <Link to="/contato" className={`nav-button ${isLoaded ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>Contato</Link>
        </div>

        <div className="social-icons-home">
          <a href="https://github.com/Alvaro-Amaral" target="_blank" rel="noopener noreferrer" className="github-icon"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/alvaro_amarall/" target="_blank" rel="noopener noreferrer" className="instagram-icon"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Home; 