// Keypad.test.tsx
import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import Keypad from './Keypad';
import Button from '../Button/Button';
import React from 'react';


describe('Keypad Component', () => {
  const mockInput = jest.fn();
  const mockSpecialInput = jest.fn();
  const mockCalculate = jest.fn();
  const mockClear = jest.fn();

  beforeEach(() => {
    render(<Keypad onInput={mockInput} onSpecialInput={mockSpecialInput} onCalculate={mockCalculate} onClear={mockClear} />);
  });

  it('should render all the buttons', () => {
    const buttons = ['AC', '+/-', '%', '/', '*', '-', '+', '=', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    buttons.forEach(button => {
      expect(screen.getByText(button)).toBeInTheDocument();
    });
  });

  it('should handle numeric input', () => {
    fireEvent.click(screen.getByText('1'));
    expect(mockInput).toHaveBeenCalledWith('1');
  });

  it('should handle operation input', () => {
    fireEvent.click(screen.getByText('+'));
    expect(mockInput).toHaveBeenCalledWith('+');
  });

  it('should handle special input', () => {
    fireEvent.click(screen.getByText('+/-'));
    expect(mockSpecialInput).toHaveBeenCalledWith('+/-');
  });

  it('should handle calculate on "=" press', () => {
    fireEvent.click(screen.getByText('='));
    expect(mockCalculate).toHaveBeenCalled();
  });

  it('should clear display on "AC" press', () => {
    fireEvent.click(screen.getByText('AC'));
    expect(mockClear).toHaveBeenCalled();
  });
});
