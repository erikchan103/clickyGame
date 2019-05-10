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
    "image": "https://www.geek.com/wp-content/uploads/2018/10/kirby-smash-ultimate-625x352.png",
    "clicked": false
  },
  {
    "id": 2,
    "name": "Bowser",
    "image": "https://www.ssbwiki.com/images/e/ef/SSBU_Bowser_Kirby.jpg",
    "clicked": false
  },
  {
    "id": 3,
    "name": "Donkey Kong",
    "image": "https://www.ssbwiki.com/images/9/90/SSBU_Donkey_Kong_Kirby.jpg",
    "clicked": false
  },
  {
    "id": 4,
    "name": "Captain Falcon",
    "image": "https://www.ssbwiki.com/images/9/96/SSBU_Captain_Falcon_Kirby.jpg",
    "clicked": false
  },
  {
    "id": 5,
    "name": "Ganondorf",
    "image": "https://www.ssbwiki.com/images/f/f9/SSBU_Ganondorf_Kirby.jpg",
    "clicked": false
  },
  {
    "id": 6,
    "name": "Ice Climbers",
    "image": "https://www.ssbwiki.com/images/1/17/SSBU_Ice_Climbers_Kirby.jpg",
    "clicked": false
  },
  {
    "id": 7,
    "name": "Jigglypuff",
    "image": "https://www.ssbwiki.com/images/e/ec/SSBU_Jigglypuff_Kirby.jpg",
    "clicked": false
  },
  {
    "id": 8,
    "name": "Link",
    "image": "https://www.ssbwiki.com/images/f/fb/SSBU_Link_Kirby.jpg",
    "clicked": false
  },
  {
    "id": 9,
    "name": "Mario",
    "image": "https://www.ssbwiki.com/images/a/a1/SSBU_Mario_Kirby.jpg",
    "clicked": false
  },
  {
    "id": 10,
    "name": "Pikachu",
    "image": "https://www.ssbwiki.com/images/a/aa/SSBU_Pikachu_Kirby.jpg",
    "clicked": false
  },
  {
    "id": 11,
    "name": "Samus",
    "image": "https://www.ssbwiki.com/images/f/f8/SSBU_Samus_Kirby.jpg",
    "clicked": false
  },
  {
    "id": 12,
    "name": "Snake",
    "image": "https://www.ssbwiki.com/images/8/84/SSBU_Snirby.jpg",
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
