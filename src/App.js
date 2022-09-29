import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("");

  return (
    <div className={`react-root ${color}`}>
      <div className="centered">
        <h1>Color Picker</h1>
        <button className="red" onClick={() => setColor('red')}>Red</button>
        <button className="blue" onClick={() => setColor('blue')}>Blue</button>
        <button className="green" onClick={() => setColor('green')}>Green</button>

      </div>
    </div>
  );
}

export default App;
