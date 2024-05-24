'use client';

import React, { useState } from 'react';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

const Calculator: React.FC = () => {
  const [value, setValue] = useState<string>("0");

  const checkDisplayRules = (newValue: string): string => {
    const numValue = parseFloat(newValue);
    if (numValue < 0 || numValue > 999999999) return "ERROR";
    if (newValue.length > 9) return newValue.slice(0, 9);
    return newValue;
  };

  const handleInput = (input: string) => {
    let newValue = value === "0" || value === "ERROR" ? input : value + input;
    newValue = checkDisplayRules(newValue);
    setValue(newValue);
  };

  const calculateResult = () => {
    try {
      let result = eval(value).toString();
      result = checkDisplayRules(result);
      setValue(result);
    } catch (e) {
      setValue("ERROR");
    }
  };

  const handleSpecialInput = (input: string) => {
    let newValue = value;
    switch (input) {
      case "+/-":
        newValue = (parseFloat(value) * -1).toString();
        break;
      case "%":
        newValue = (parseFloat(value) / 100).toString();
        break;
    }
    newValue = checkDisplayRules(newValue);
    setValue(newValue);
  };

  const clearInput = () => {
    setValue("0");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.cdn1.stockunlimited.net/preview1300/galaxy-background-design_2001751.jpg')" }}>
      <div className="flex flex-col rounded-lg overflow-hidden bg-black bg-opacity-50 backdrop-filter backdrop-blur-xl">
        <div className="flex items-center space-x-1 p-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <Display value={value} />
        <Keypad onInput={handleInput} onSpecialInput={handleSpecialInput} onCalculate={calculateResult} onClear={clearInput} />
      </div>
    </div>
  );
}

export default Calculator;
