import React from 'react';
import Button from '../Button/Button';

interface KeypadProps {
  onInput: (input: string) => void;
  onSpecialInput: (input: string) => void;
  onCalculate: () => void;
  onClear: () => void;
}

const Keypad: React.FC<KeypadProps> = ({ onInput, onSpecialInput, onCalculate, onClear }) => {
  return (
    <div className="grid grid-cols-4 gap-1">
      <Button label="AC" onClick={onClear} />
      <Button label="+/-" onClick={() => onSpecialInput('+/-')} />
      <Button label="%" onClick={() => onSpecialInput('%')} />
      <Button label="/" onClick={() => onInput('/')} />
      <Button label="7" onClick={() => onInput('7')} />
      <Button label="8" onClick={() => onInput('8')} />
      <Button label="9" onClick={() => onInput('9')} />
      <Button label="*" onClick={() => onInput('*')} />
      <Button label="4" onClick={() => onInput('4')} />
      <Button label="5" onClick={() => onInput('5')} />
      <Button label="6" onClick={() => onInput('6')} />
      <Button label="-" onClick={() => onInput('-')} />
      <Button label="1" onClick={() => onInput('1')} />
      <Button label="2" onClick={() => onInput('2')} />
      <Button label="3" onClick={() => onInput('3')} />
      <Button label="+" onClick={() => onInput('+')} />
      <Button label="0" onClick={() => onInput('0')} span={2} />
      <Button label="." onClick={() => onInput('.')} />
      <Button label="=" onClick={onCalculate} />
    </div>
  );
};

export default Keypad;
