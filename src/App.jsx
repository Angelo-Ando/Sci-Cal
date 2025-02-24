import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'

import geloImage from '/src/img/gelo.jpg'
import gelo2Image from '/src/img/gelo2.jpg'
import hellImage from '/src/img/hell.jpg'
import turtleImage from '/src/img/turtle.jpg'
import loveImage from '/src/img/love.jpg'
import kidsImage from '/src/img/kids.jpg'
import AboutMe from './AboutMe';
import tigerImage from '/src/img/biscuit.png'
import dungeonImage from '/src/img/dungeon.jpg'
import blackGif from '/src/img/black.gif'
import fnfGif from '/src/img/fnf.gif'
import danceGif from '/src/img/dance.gif'
import tumbleweedGif from '/src/img/tumbleweed.gif'
import aquafyVid from '/src/img/aquafy.mp4'

function Home() {
  return (
    <>
    <body style={{ display: "block" }}>
      <h1 className="Angelo">Hi, I'm Angelo M. Ando!</h1>
      <div className="first-container">
        <div> <a href="https://andoangeloportfolio.my.canva.site/" target="_blank">
          <img src={geloImage} className="gelo1"/>
          <img src={geloImage} style={{opacity:0}}/>
          <img src={gelo2Image} className="gelo2"/> </a> 
        </div>
      </div>
      
      <hr/>

      <h1 className="AboutMe"> Read My About Me!</h1>
      <h1>Entered Contests</h1>
      <div className="contest-container"> 
        <img src={tumbleweedGif}/>
        <p>Wala sinalihan, di dahil wala bilib sa sarili, tamad rin.</p>
      </div>
            
      <h1>My Skills & Expertise</h1>
      <ul>
      <div className="Display">
        <li>< h2>Digital Art</h2> </li>
        <div>
          <div className="image-display">
              <img src={tigerImage}/>
              <img src={turtleImage}/>
              <img src={loveImage}/>
              <img src={hellImage}/>
              <img src={kidsImage}/>
            </div>
          </div>
          <li>< h2>Animation</h2> </li>
          <div className="ani-display">
            <img src={blackGif}/>
            <img src={fnfGif}/>
            <img src={danceGif}/>
          </div>
          <li>< h2>Front-End Designing (Beginner)</h2> </li>
          <div className="fe-display">
            <img src={dungeonImage}/>
            <video src={aquafyVid}controls width="500"></video>
            </div>
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
          <Link to="https://andoangeloportfolio.my.canva.site/"><button className="Bt1"><b>PORTFOLIO</b></button></Link>
          <Link to="https://www.tumblr.com/skyskyskyart"><button className="Bt2"><b>TUMBLR</b></button></Link>
          <Link to="https://www.webtoons.com/en/canvas/power-vs-power/list?title_no=964744&page=2"><button className="Bt3"><b>WEBTOON</b></button></Link>
          <p><i>Warning! Tumblr contains NSFW contents.</i></p>
        </div> <hr/>
            
        <h1>Thanks for reading my About Me!</h1>
        <h2>Here's a Sonic video!</h2>
        <iframe 
        width="560"
        height="315"
        src="https://youtube.com/embed/lKH9DvNawF0?si=29RKe2vutUT7nWPf"
        title="Sonic said what?" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen> 
        </iframe>   
 
    </body>
    </>
  )
}

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Router>
    );
  }
export default App
