import { getFactors } from '../helpers';

describe('getFactors', () => {
  it('returns the factors of one', () => {
    expect(getFactors(1)).toEqual([1]);
  });

  it('returns the factors of two', () => {
    expect(getFactors(2)).toEqual([1, 2]);
  });

  // etc...
});
