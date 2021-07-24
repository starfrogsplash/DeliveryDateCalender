import { render, screen } from '@testing-library/react';
import Calender from '../components/Calender';

test('renders CHANGE DATE text for change button', () => {
  render(<Calender
    isShowing={true}
    hide={() => {}}
    currentDate={12}
    setDate={() => {}}
  />);
  const divElement = screen.getByText(/CHANGE DATE/i);
  expect(divElement).toBeInTheDocument();
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

