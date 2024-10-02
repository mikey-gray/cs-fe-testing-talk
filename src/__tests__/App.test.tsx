import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders title', () => {
  render(<App />);
  const probablyTheHeader = screen.getByText(/super simple app/i);
  expect(probablyTheHeader).toBeInTheDocument();
});
