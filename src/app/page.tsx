import React from 'react';
import Calculator from './components/Calculator/Calculator'; // Asegúrate de que la ruta de importación es correcta

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Bienvenido a la Página Principal</h1>
      <Calculator /> 
    </div>
  );
}

export default HomePage;
