import React from "react";
import Kevin from "../components/images/durant-vs.png";
import Steph from "../components/images/curry-vignette.png";
import "../components/Versus.css";
import Header from "../components/Header";

function Versus() {
  return (
    <div className="Versus">
      <Header />
      <div className="Body-versus">
        <div className="Versus-legend-container">
          <div className="Versus-legend-stats">
            <h3 className="Stats-h3">Stats Legend</h3>
            <br />
            <p>Points: 30</p>
            <br />
            <p>3 Points: 15</p>
            <br />
            <p>2 Points: 18</p>
            <br />
            <p>Free Throw % : 85.9</p>
            <br />
            <p>Wins : 14</p>
            <br />
            <p>Loss : 12</p>
            <br />
            <p>Championship : 4</p>
          </div>

          <div className="Versus-legend">
            <div className="Versus-legend-name">Stephen Curry</div>
            <div className="Image-Versus-legend">
              <img src={Steph} className="playerImg" alt="img des joueurs" />
            </div>
            <button className="Vote-versus-legend">Vote</button>
          </div>
          </div>
          <div className="Versus-legend1-container">
          <div className="Versus-legend1">
            <div className="Versus-legend1-name">Kevin Durant</div>
            <div className="Image-Versus-legend1">
              <img src={Kevin} className="playerImg" alt="img des joueurs" />
            </div>
            <button className="Vote-versus-legend1">Vote</button>
          </div>
          

          <div className="Versus-legend1-stats">
            <h3 className="Stats-h3">Stats Legend</h3>
            <br />
            <p>Points: 41</p>
            <br />
            <p>3 Points: 12</p>
            <br />
            <p>2 Points: 22</p>
            <br />
            <p>Free Throw % : 84</p>
            <br />
            <p>Wins : 17</p>
            <br />
            <p>Loss : 10</p>
            <br />
            <p>Championship : 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Versus;
