module.exports = {
    transform: {
      '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',  // Usa babel-jest para transformar archivos TS, TSX, JS, JSX
    },
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',  // Manejo de importaciones de estilos
    },
    testEnvironment: 'jsdom',  // Ambiente de prueba para simular el navegador
  };
  