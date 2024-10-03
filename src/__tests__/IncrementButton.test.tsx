import { render, screen } from '@testing-library/react';
import IncrementButton from '../IncrementButton';

describe('IncrementButton', () => {
  it('calls setCount', () => {
    const setCount = jest.fn();
    render(<IncrementButton setCount={setCount} />);

    screen.getByRole('button', { name: /click me/i }).click();
    expect(setCount).toHaveBeenCalledTimes(1);
  });

  // etc...
});
