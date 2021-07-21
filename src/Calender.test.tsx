import { render, screen } from '@testing-library/react';
import Calender from './Calender';

test('renders CHANGE DATE text for change button', () => {
  render(<Calender
    isShowing={true}
    hide={() => {}}
    currentDate={12}
    setDate={() => {}}
  />);
  const linkElement = screen.getByText(/CHANGE DATE/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Cancel & DONT CHANGE text for cancel button', () => {
  render(<Calender
    isShowing={true}
    hide={() => {}}
    currentDate={12}
    setDate={() => {}}
  />);
  const spanElementA = screen.getByText(/Cancel,/i);
  const spanElementB = screen.getByText(/DON'T CHANGE/i);
  expect(spanElementA).toBeInTheDocument();
  expect(spanElementB).toBeInTheDocument();
});

