import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders title', () => {
    render(<App />);
    const header = screen.getByRole('heading', { name: /welcome to a super simple app!/i });

    expect(header).toBeInTheDocument();
  });

  // etc...
});
