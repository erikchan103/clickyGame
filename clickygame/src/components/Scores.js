import React from "react";
import "./Scores.css";

const Scores = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      <p>Highscore: {props.highscore}</p>
      <p>Score: {props.score} </p>
    </div>
  </div>
);

export default Scores;