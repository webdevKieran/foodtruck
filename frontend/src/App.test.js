import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('shows the Foodtruck heading on the main page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Foodtruck finder/i)
  expect(linkElement).toBeInTheDocument()

});
