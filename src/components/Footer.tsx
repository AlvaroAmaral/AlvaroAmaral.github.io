import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Álvaro Amaral. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer; 