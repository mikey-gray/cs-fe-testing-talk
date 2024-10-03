export const getFibSequence = (start: number, count: number): number[] => {
  const sequence: number[] = [start];
  let prev = start;
  let curr = start;

  for (let i = 1; i < count; i++) {
    const next = prev + curr;
    sequence.push(next);
    prev = curr;
    curr = next;
  }

  return sequence;
};

export const getFactors = (num: number): number[] => {
  const factors: number[] = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return factors;
};
