import React, { useState, useEffect } from 'react';
import './App.css';
import ProgressChart from './ProgressChart';
import Countdown from './Countdown';
import {progress} from './GlobalVariablesContext';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BB Countdown</h1>
        <h2>Until I see you again &lt;3</h2>
        <div className="chart-container">
        <Countdown />
        <ProgressChart progress={progress} />
        </div>
      </header>
    </div>
  );
}

export default App;
