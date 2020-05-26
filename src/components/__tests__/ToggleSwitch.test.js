import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToggleSwitch from '../ToggleSwitch';

test('render test', () => {
  render(<ToggleSwitch />);
});
