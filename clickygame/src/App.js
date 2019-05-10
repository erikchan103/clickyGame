import React from 'react';
import Scores from "./components/Scores";
import './App.css';

const score=0;
const highscore=0;

function App() {
  return (
    <div>
      <Scores score={score} highscore={highscore}>Clicky Game</Scores>
    </div>
  );
}

export default App;
