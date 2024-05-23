'use client'; // Instrucción para indicar que este componente debe ejecutarse en el cliente

import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [value, setValue] = useState<string>("0");

  // Función para verificar las reglas de visualización del valor
  const checkDisplayRules = (newValue: string): string => {
    // Convertir a número para manejar los límites numéricos
    const numValue = parseFloat(newValue);

    // Revisar si el número es negativo o excede los límites permitidos
    if (numValue < 0 || numValue > 999999999) {
      return "ERROR";
    }
    // Limitar la cantidad de dígitos visibles a 9
    if (newValue.length > 9) {
      return newValue.slice(0, 9);
    }
    return newValue;
  };

  // Función para manejar la entrada de los botones numéricos y de operaciones
  const handleInput = (input: string): void => {
    let newValue = value === "0" || value === "Error" ? input : value + input;
    newValue = checkDisplayRules(newValue);
    setValue(newValue);
  };

  // Función para calcular el resultado al presionar '='
  const calculateResult = (): void => {
    try {
      let result = eval(value).toString();
      result = checkDisplayRules(result);
      setValue(result);
    } catch (e) {
      setValue("ERROR");
    }
  };

  // Función para limpiar el display al presionar 'AC'
  const clearInput = (): void => {
    setValue("0");
  };

  // Función para manejar operadores especiales como '+/-' y '%'
  const handleSpecialInput = (input: string): void => {
    let newValue = value;
    switch (input) {
      case "+/-":
        newValue = (parseFloat(value) * -1).toString();
        break;
      case "%":
        newValue = (parseFloat(value) / 100).toString();
        break;
      default:
        break;
    }
    newValue = checkDisplayRules(newValue);
    setValue(newValue);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.cdn1.stockunlimited.net/preview1300/galaxy-background-design_2001751.jpg')" }}>
      <div className="flex flex-col rounded-lg overflow-hidden bg-black bg-opacity-50 backdrop-filter backdrop-blur-xl">
        <div className="flex items-center space-x-1 p-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <input type="text" value={value} readOnly className="text-right text-5xl w-72 bg-transparent text-white px-4 font-light" />
        <div className="grid grid-cols-4 gap-1">
          <button onClick={clearInput} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">AC</button>
          <button onClick={() => handleSpecialInput('+/-')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">+/-</button>
          <button onClick={() => handleSpecialInput('%')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">%</button>
          <button onClick={() => handleInput('/')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">/</button>
          <button onClick={() => handleInput('7')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">7</button>
          <button onClick={() => handleInput('8')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">8</button>
          <button onClick={() => handleInput('9')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">9</button>
          <button onClick={() => handleInput('*')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">*</button>
          <button onClick={() => handleInput('4')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">4</button>
          <button onClick={() => handleInput('5')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">5</button>
          <button onClick={() => handleInput('6')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">6</button>
          <button onClick={() => handleInput('-')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">-</button>
          <button onClick={() => handleInput('1')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">1</button>
          <button onClick={() => handleInput('2')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">2</button>
          <button onClick={() => handleInput('3')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">3</button>
          <button onClick={() => handleInput('+')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">+</button>
          <button onClick={() => handleInput('0')} className="col-span-2 py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">0</button>
          <button onClick={() => handleInput('.')} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">,</button>
          <button onClick={calculateResult} className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
