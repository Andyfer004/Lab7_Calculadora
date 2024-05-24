// Display.test.tsx
import { render, screen } from '@testing-library/react';
import Display from './Display';
import '@testing-library/jest-dom';
import React from 'react';

describe('Display Component', () => {
  it('should display the value passed to it', () => {
    render(<Display value="123" />);
    expect(screen.getByDisplayValue('123')).toBeInTheDocument();
  });
});
