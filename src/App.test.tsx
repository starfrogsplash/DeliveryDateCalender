import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Choose your delivery text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Choose your delivery/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders day text', () => {
  render(<App />);
  const linkElement = screen.getByText(/day/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Earliest delivery text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Earliest delivery/i);
  expect(linkElement).toBeInTheDocument();
});
