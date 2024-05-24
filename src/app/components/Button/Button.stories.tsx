/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Button from './Button';


// Define los argumentos del componente Button.
interface ButtonProps {
    label: string;
    onClick: () => void;
    span?: number;
  }
  
  export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
      onClick: { action: 'clicked' },
    },
  };
  
  // Template es una función que toma directamente ButtonProps como argumentos y devuelve un elemento JSX.
const Template: React.FC<ButtonProps> & { args?: any } = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Click Me',
};

export const Large = Template.bind({});
Large.args = {
    label: 'Click Me',
    span: 2,
};
