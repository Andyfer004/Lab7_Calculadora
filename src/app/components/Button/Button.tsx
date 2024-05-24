import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  span?: number;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, span = 1 }) => {
  return (
    <button onClick={onClick} className={`col-span-${span} py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200`}>
      {label}
    </button>
  );
};

export default Button;
