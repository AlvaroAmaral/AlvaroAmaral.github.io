import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200); // Pequeno atraso para animação de entrada
  }, []);

  return (
    <main className="main-moderno">
      <section className="sobre-section">
        <div className="container">
          <h2 className="titulo-secao-principal">Sobre Mim</h2>
          <div className={`perfil-container ${isLoaded ? 'animated-fade-in-up' : ''}`}>
            <div className="foto-container-circular">
              <img src="/FotoPerfil.png" alt="Minha foto de perfil" className="foto-perfil-circular" />
            </div>
            <div className="bio-container">
              <h3 className="titulo-secao">Quem sou eu</h3>
              <div className="texto-sobre">
                <p>Olá! Meu nome é <span className="destaque">Álvaro Amaral</span>. Sou estudante de Engenharia de Software na Uninter.</p>
                <p>Sou apaixonado por tecnologia e desenvolvimento de software, buscando sempre aprender novas habilidades e técnicas para criar soluções inovadoras. Minha jornada na área de tecnologia começou com a curiosidade sobre como os sistemas funcionam e evoluiu para uma paixão por criar aplicações que resolvem problemas reais.</p>
                <p>Atualmente, estou focado em me tornar um desenvolvedor full-stack, que considero muito importante para minha carreira.</p>
              </div>
            </div>
          </div>
          
          <div className={`citacao ${isLoaded ? 'animated-fade-in' : ''}`} style={{ transitionDelay: '0.3s' }}>
            "A tecnologia move o mundo." - Steve Jobs
          </div>
          
          <div className="cards-grid">
            <div className={`card ${isLoaded ? 'animated-fade-in-up' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className="card-header">
                <i className="fas fa-laptop-code"></i>
                <h3>Meus Interesses</h3>
              </div>
              <ul className="lista-animada">
                <li>Desenvolvimento Front End</li>
                <li>Desenvolvimento Back End</li>
                <li>Análise de Dados</li>
                <li>Desenvolvimento Mobile</li>
                <li>Computação em Nuvem</li>
              </ul>
            </div>
            
            <div className={`card ${isLoaded ? 'animated-fade-in-up' : ''}`} style={{ transitionDelay: '0.5s' }}>
              <div className="card-header">
                <i className="fas fa-gamepad"></i>
                <h3>Meus Hobbies</h3>
              </div>
              <ul className="lista-animada">
                <li>Tecnologia</li>
                <li>Jogos virtuais e físicos</li>
                <li>Esportes</li>
                <li>Séries</li>
                <li>Viagens</li>
              </ul>
            </div>
            
            <div className={`card ${isLoaded ? 'animated-fade-in-up' : ''}`} style={{ transitionDelay: '0.6s' }}>
              <div className="card-header">
                <i className="fas fa-star"></i>
                <h3>Características Pessoais</h3>
              </div>
              <ul className="lista-animada">
                <li>Proatividade</li>
                <li>Curiosidade</li>
                <li>Trabalho em equipe</li>
                <li>Resolução de problemas</li>
                <li>Aprendizado contínuo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About; 