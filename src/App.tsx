import React, { useState } from 'react';
import IncrementButton from './IncrementButton';
import './App.css';
import ShowSomeMath from './ShowSomeMath';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header>
        <h1>Welcome to a super simple app!</h1>
      </header>
      <IncrementButton setCount={setCount} />
      <ShowSomeMath startingNumber={count} />
    </div>
  );
};

export default App;
