import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import geloImage from '/src/img/gelo.jpg';
import gelo2Image from '/src/img/gelo2.jpg';
import hellImage from '/src/img/hell.jpg';
import turtleImage from '/src/img/turtle.jpg';
import loveImage from '/src/img/love.jpg';
import kidsImage from '/src/img/kids.jpg';
import tigerImage from '/src/img/biscuit.png';
import dungeonImage from '/src/img/dungeon.jpg';
import blackGif from '/src/img/black.gif';
import fnfGif from '/src/img/fnf.gif';
import danceGif from '/src/img/dance.gif';
import tumbleweedGif from '/src/img/tumbleweed.gif';
import aquafyVid from '/src/img/aquafy.mp4';

function Home() {
  return (
    <div>
      <h1 className="Angelo">Hi, I'm Angelo M. Ando!</h1>
      <div className="first-container">
        <a href="https://andoangeloportfolio.my.canva.site/" target="_blank" rel="noopener noreferrer">
          <img src={geloImage} className="gelo1" alt="Gelo" />
          <img src={geloImage} style={{ opacity: 0 }} alt="Hidden Gelo" />
          <img src={gelo2Image} className="gelo2" alt="Gelo 2" />
        </a>
      </div>

      <hr />

      <h1 className="AboutMe"> Read My About Me!</h1>
      <h1>Entered Contests</h1>
      <div className="contest-container">
        <img src={tumbleweedGif} alt="Tumbleweed" />
        <p>Wala sinalihan, di dahil wala bilib sa sarili, tamad rin.</p>
      </div>

      <h1>My Skills & Expertise</h1>
      <ul className="Display">
        <li><h2>Digital Art</h2></li>
        <div className="image-display">
          <img src={tigerImage} alt="Tiger Art" />
          <img src={turtleImage} alt="Turtle Art" />
          <img src={loveImage} alt="Love Art" />
          <img src={hellImage} alt="Hell Art" />
          <img src={kidsImage} alt="Kids Art" />
        </div>

        <li><h2>Animation</h2></li>
        <div className="ani-display">
          <img src={blackGif} alt="Black Animation" />
          <img src={fnfGif} alt="FNF Animation" />
          <img src={danceGif} alt="Dance Animation" />
        </div>

        <li><h2>Front-End Designing (Beginner)</h2></li>
        <div className="fe-display">
          <img src={dungeonImage} alt="Dungeon UI" />
          <video src={aquafyVid} controls width="500"></video>
        </div>
      </ul>

      <table className="super-table">
        <thead>
          <tr>
            <th className="THead1"><h2>Career Goals</h2></th>
            <th className="THead2"><h2>Fun Facts</h2></th>
            <th className="THead3"><h2>My Hobbies!</h2></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="THead1">
              <ul>
                <li>To become a very talented and creative web designer.</li>
                <li>To work as either a web designer or graphic designer for a company.</li>
              </ul>
            </td>
            <td className="THead2">
              <ul>
                <li>Left 4 Dead 2 is my favorite video game.</li>
                <li>Horror, comedy and fantasy are my favorite film genres.</li>
                <li>I love dogs! They are the best!</li>
              </ul>
            </td>
            <td className="THead3">
              <ul>
                <li>I draw and post my drawings on Tumblr.</li>
                <li>I make a comic strip and post it on Webtoon.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <h1>Call to Action!</h1>
      <h2>Check out my portfolio and social platforms!</h2>
      <div className="Action">
        <a href="https://andoangeloportfolio.my.canva.site/" target="_blank" rel="noopener noreferrer">
          <button className="Bt1"><b>PORTFOLIO</b></button>
        </a>
        <a href="https://www.tumblr.com/skyskyskyart" target="_blank" rel="noopener noreferrer">
          <button className="Bt2"><b>TUMBLR</b></button>
        </a>
        <a href="https://www.webtoons.com/en/canvas/power-vs-power/list?title_no=964744&page=2" target="_blank" rel="noopener noreferrer">
          <button className="Bt3"><b>WEBTOON</b></button>
        </a>
        <p><i>Warning! Tumblr contains NSFW content.</i></p>
      </div>

      <hr />

      <h1>Thanks for reading my About Me!</h1>
      <h2>Here's a Sonic video!</h2>
      <iframe
        width="560"
        height="315"
        src="https://youtube.com/embed/lKH9DvNawF0?si=29RKe2vutUT7nWPf"
        title="Sonic said what?"
        style={{ border: "none" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

