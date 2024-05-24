/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Keypad from './Keypad';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/Keypad',
  component: Keypad,
};

export const Default = () => (
  <Keypad
    onInput={action('onInput')}
    onSpecialInput={action('onSpecialInput')}
    onCalculate={action('onCalculate')}
    onClear={action('onClear')}
  />
);
