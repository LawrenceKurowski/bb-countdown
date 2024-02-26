import React, { useState, useEffect } from 'react';
import './App.css';
import ProgressChart from './ProgressChart';
import Countdown from './Countdown';

const App = () => {
  const progress = 50;
  return (
    <div className="App">
      <header className="App-header">
        <h1>BB Countdown</h1>
        <h2>Until I see you again &lt;3</h2>
        <p>{Countdown}</p>
        <ProgressChart progress={progress} />
      </header>
    </div>
  );
}

export default App;
