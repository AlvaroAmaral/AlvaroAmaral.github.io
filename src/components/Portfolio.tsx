import React, { useState, useEffect } from 'react';

const Portfolio: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200); // Pequeno atraso para animação de entrada
  }, []);

  return (
    <main className="main-moderno">
      <section className="portfolio-section">
        <div className="conteudo-secao">
          <h2 className="titulo-secao-principal">Meus Projetos</h2>
          <div className="portfolio-grid">
            <div className={`projeto-item ${isLoaded ? 'animated-fade-in-up' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <img src="/ProjetoPortifolio.png" alt="Projeto Hetec" />
              <h3>Hetec</h3>
              <p>Forúm para tirar dúvidas dos alunos.</p>
              <a href="https://hetec.netlify.app/" className="btn-projeto" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
            </div>
            <div className={`projeto-item ${isLoaded ? 'animated-fade-in-up' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <img src="/PrintHetec.png" alt="Projeto 2 - Exemplo" />
              <h3>Sistema de Gestão Escolar</h3>
              <p>Um sistema completo para gerenciamento de alunos, turmas e notas.</p>
              <a href="#" className="btn-projeto" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;