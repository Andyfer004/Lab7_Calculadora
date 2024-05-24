import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <input type="text" value={value} readOnly className="text-right text-5xl w-72 bg-transparent text-white px-4 font-light" />
  );
};

export default Display;
