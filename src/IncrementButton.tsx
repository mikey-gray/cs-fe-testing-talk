import React, { Dispatch, SetStateAction } from 'react';

const IncrementButton = ({ setCount }: IncrementButtonProps) => {
  const handleClick = () => setCount((count) => count + 1);

  return (
    <section>
      <p>Click the button, see a number:</p>
      <button className="button" onClick={handleClick}>
        Click me!
      </button>
    </section>
  );
};

export default IncrementButton;

type IncrementButtonProps = {
  setCount: Dispatch<SetStateAction<number>>;
};
