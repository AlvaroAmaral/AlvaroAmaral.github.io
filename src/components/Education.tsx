import React, { useState, useEffect } from 'react';

const Education: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200); // Pequeno atraso para animação de entrada
  }, []);

  return (
    <main className="main-moderno">
      <section className="formacao-section">
        <div className="conteudo-secao">
          <h2 className="titulo-secao-principal">Minha Formação</h2>
          <div className={`formacao-item ${isLoaded ? 'animated-fade-in-up' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <h3>Formação Acadêmica</h3>
            <ul>
              <li>
                <h4><i className="fas fa-school"></i> Curso Técnico em Desenvolvimento de Sistemas com o Ensino Médio</h4>
                <p>Etec Martinho Di Ciero / 2020 - 2022</p>
                <p>Ensino médio completo cursado junto ao técnico em desenvolvimento de sistemas. Onde é ensinado os principais conceitos de programação, banco de dados e os conceitos iniciais de hardware.</p>
              </li>
            </ul>
          </div>
          
          <div className={`formacao-item ${isLoaded ? 'animated-fade-in-up' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h3>Conhecimentos em Idiomas</h3>
            <ul>
              <li><i className="fas fa-globe"></i> Português - Nativo</li>
              <li><i className="fas fa-comments"></i> Inglês - Fluente</li>
            </ul>
          </div>
          
          <div className={`formacao-item ${isLoaded ? 'animated-fade-in-up' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <h3>Cursos Complementares</h3>
            <ul>
              <li>
                <h4><i className="fas fa-laptop-code"></i> Técnico em Desenvolvimento de Sistemas</h4>
                <p>Etec Martinho Di Ciero / 2020 - 2022</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Education; 