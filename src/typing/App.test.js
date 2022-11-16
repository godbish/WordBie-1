import { render, screen } from '@testing-library/react';
import Typing from './App';

test('renders learn react link', () => {
  render(<Typing />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
