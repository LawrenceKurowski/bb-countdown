import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    // Set your target date here
    const targetDate = new Date('2024-03-13T12:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60 * 24)% (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60) % (1000 * 60) / 1000);

      // Format the countdown string
      const countdownStr = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      setCountdown(countdownStr);

      // If the countdown is over, clear the interval
      if (distance < 0) {
        clearInterval(interval);
        setCountdown('EXPIRED');
      }
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>BB Countdown</h1>
        <h2>Until I see you again &lt;3</h2>
        <p>{countdown}</p>
      </header>
    </div>
  );
}

export default App;
