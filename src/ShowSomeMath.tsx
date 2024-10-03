import { getFactors, getFibSequence } from './helpers';

const ShowSomeMath = ({ startingNumber }: ShowSomeMathProps) => {
  if (startingNumber < 1) return <></>;

  const factors = getFactors(startingNumber).join(', ');
  const fibSequence = getFibSequence(startingNumber, 10).join(', ');

  return (
    <section>
      <p>
        <strong>Starting number: </strong>
        <br />
        {startingNumber}
      </p>
      <p>
        <strong>It's factors are: </strong>
        <br />
        {factors}
      </p>
      <p>
        <strong>If it was the start of a Fibonacci sequence: </strong>
        <br />
        {fibSequence}, ...
      </p>
    </section>
  );
};

export default ShowSomeMath;

type ShowSomeMathProps = {
  startingNumber: number;
};
