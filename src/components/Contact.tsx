import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [messageCharCount, setMessageCharCount] = useState(0);
  const MAX_MESSAGE_LENGTH = 500;

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, []);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageCharCount(e.target.value.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário aqui
    alert("Mensagem enviada com sucesso!"); // Apenas para demonstração
  };

  return (
    <main className="main-moderno">
      <section className="contato-section">
        <div className="container">
          <h2 className="titulo-secao-principal">Fale Comigo</h2>
          <div className="contato-container">
            <div className={`formulario-container ${isLoaded ? 'animated-fade-in-up' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <div className="formulario-contato">
                <form onSubmit={handleSubmit}>
                  <div className="form-grupo">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />
                    <i className="fas fa-user icon"></i>
                    <span className="validation-message">Por favor, digite seu nome.</span>
                  </div>
                  <div className="form-grupo">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <i className="fas fa-envelope icon"></i>
                    <span className="validation-message">Por favor, digite um email válido.</span>
                  </div>
                  <div className="form-grupo">
                    <label htmlFor="assunto">Assunto:</label>
                    <input type="text" id="assunto" name="assunto" required />
                    <i className="fas fa-tag icon"></i>
                    <span className="validation-message">Por favor, digite o assunto.</span>
                  </div>
                  <div className="form-grupo">
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" rows={5} maxLength={MAX_MESSAGE_LENGTH} required onChange={handleMessageChange}></textarea>
                    <span className={`char-counter ${messageCharCount > MAX_MESSAGE_LENGTH * 0.8 ? 'warning' : ''}`}>{messageCharCount}/{MAX_MESSAGE_LENGTH}</span>
                    <span className="validation-message">Por favor, digite sua mensagem (máx. {MAX_MESSAGE_LENGTH} caracteres).</span>
                  </div>
                  <button type="submit" className="btn-enviar">Enviar Mensagem</button>
                </form>
              </div>
            </div>
            <div className={`info-contato-container ${isLoaded ? 'animated-fade-in-up' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="info-contato">
                <h3>Informações de Contato</h3>
                <p><i className="fas fa-envelope"></i> alvaro.amaral@example.com</p>
                <p><i className="fas fa-phone"></i> +55 11 98765-4321</p>
                <p><i className="fas fa-map-marker-alt"></i> São Paulo, Brasil</p>
                <div className="social-icons">
                  <a href="https://github.com/Alvaro-Amaral" target="_blank" rel="noopener noreferrer" className="github-icon"><i className="fab fa-github"></i></a>
                  <a href="https://www.instagram.com/alvaro_amarall/" target="_blank" rel="noopener noreferrer" className="instagram-icon"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;