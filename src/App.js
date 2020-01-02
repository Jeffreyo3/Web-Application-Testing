import React from 'react';
import './App.css';

import Dashboard from './components/Dashboard.js';
import Display from './components/Display.js';

function App() {

  const [balls, setBalls] = React.useState(0);
  const [strikes, setStrikes] = React.useState(0);

  function addBalls() {
    if (balls === 3) {
      setBalls(-1);
      setStrikes(0);
    }
    setBalls(balls => balls + 1);
  };

  function handleFoul() {
    if(balls === 3) {
      setBalls(2);
    }
    setBalls(balls => balls + 1);
  };

  function addStrikes() {
    if (strikes === 2) {
      setStrikes(-1);
      setBalls(0);
    }
    setStrikes(strikes => strikes + 1);
  };

  function setZero () {
    setBalls(0);
    setStrikes(0);
  };

  return (
    <div className="App">
      <h1>Baseball Scoreboard</h1>
      <Display
        balls={balls}
        strikes={strikes}  
      />   

      <Dashboard 
        setZero={setZero}
        handleFoul={handleFoul}
        addBalls={addBalls}
        addStrikes={addStrikes}
      />

    </div>
  );
}

export default App;
