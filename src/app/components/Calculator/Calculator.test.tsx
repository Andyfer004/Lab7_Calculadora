// Calculator.test.tsx
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';
import React from 'react';

describe('Calculator Component', () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  it('should perform an addition correctly', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('3')).toBeInTheDocument();
  });

  it('should handle divide by zero with "ERROR"', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('ERROR')).toBeInTheDocument();
  });
});
