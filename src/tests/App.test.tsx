import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders Choose your delivery text', () => {
  render(<App />);
  const pElement = screen.getByText(/Choose your delivery/i);
  expect(pElement).toBeInTheDocument();
});

test('renders day text', () => {
  render(<App />);
  const divElement = screen.getByText(/day/i);
  expect(divElement).toBeInTheDocument();
});

test('renders Earliest delivery text', () => {
  render(<App />);
  const pElement = screen.getByText(/Earliest delivery/i);
  expect(pElement).toBeInTheDocument();
});
