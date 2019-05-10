import React from 'react';
import Scores from "./components/Scores";
import Card from "./components/Card"
import './App.css';

const score = 0;
const highscore = 0;
const cards = [
  {
    "id": 1,
    "name": "Kirby",
    "image": "https://www.ssbwiki.com/images/6/63/Kirby_KSA.png",
    "clicked": false
  },
  {
    "id": 2,
    "name": "Bowser",
    "image": "./images/bowser.jpg",
    "clicked": false
  },
  {
    "id": 3,
    "name": "Donkey Kong",
    "image": "./images/dk.jpg",
    "clicked": false
  },
  {
    "id": 4,
    "name": "Captain Falcon",
    "image": "./images/capFalcon.jpg",
    "clicked": false
  },
  {
    "id": 5,
    "name": "Ganondorf",
    "image": "./images/ganon.jpg",
    "clicked": false
  },
  {
    "id": 6,
    "name": "Ice Climbers",
    "image": "./images/iceClimbers.jpg",
    "clicked": false
  },
  {
    "id": 7,
    "name": "Jigglypuff",
    "image": "./images/jigglypuff.jpg",
    "clicked": false
  },
  {
    "id": 8,
    "name": "Link",
    "image": "./images/link.jpg",
    "clicked": false
  },
  {
    "id": 9,
    "name": "Mario",
    "image": "./images/mario.jpg",
    "clicked": false
  },
  {
    "id": 10,
    "name": "Pikachu",
    "image": "./images/pikachu.jpg",
    "clicked": false
  },
  {
    "id": 11,
    "name": "Samus",
    "image": "./images/samus.jpg",
    "clicked": false
  },
  {
    "id": 12,
    "name": "Snake",
    "image": "./images/snake.jpg",
    "clicked": false
  }
];

function App() {
  return (
    <div className="gameBox">
      <Scores score={score} highscore={highscore}>Clicky Game</Scores>
      {cards.map(card => (
        <Card
          id={card.id}
          key={card.id}
          image={card.image}
        />
      ))}
    </div>
  );
}

export default App;
