import React from "react";
import "./PageButtons";
import { Link } from "react-router-dom";

function PageButtons() {
  return (
    <div className="GamesPageButtons">
      <Link to="/game">
      <button className="PageButtons">1</button>
      </Link>
      <Link to="/game-2">
      <button className="PageButtons">2</button>
      </Link>
      <Link to="/game-3">
      <button className="PageButtons">3</button>
      </Link>
      <Link to="/game-4">
      <button className="PageButtons">4</button>
      </Link>
    </div>
  );
}

export default PageButtons;
