import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import geloImage from '/src/img/gelo.jpg'
import gelo2Image from '/src/img/gelo2.jpg'
import hellImage from '/src/img/hell.jpg'
import turtleImage from '/src/img/turtle.jpg'
import rustImage from '/src/img/rust.jpg'
import catImage from '/src/img/cat.jpg'
import loveImage from '/src/img/love.jpg'
import kidsImage from '/src/img/kids.jpg'
import AboutMe from './AboutMe';

function Home() {
  const [image1, setImage1] = useState(hellImage)
  const [image2, setImage2] = useState(turtleImage)
  const [image3, setImage3] = useState(rustImage)
  const [image4, setImage4] = useState(catImage)
  const [image5, setImage5] = useState(loveImage)
  const [image6, setImage6] = useState(kidsImage)
  

  return (
    <>
    <body>
      <p className="p1"><i>If you see a box in the background, just reload the page.</i></p>
        <h1 className="Apph1"> Hi, I'm Angelo!</h1>
          <div className="image-container">
            <a href="https://andoangeloportfolio.my.canva.site/" target="_blank">
              <img src={geloImage} className="gelo1"/>
              <img src={gelo2Image} className="gelo2"/>
            </a>
          </div>      

          <div className="Images">
            <div className="div1img" style={{position: "absolute"}}>
              <img src={image2}/>
              <img src={image1}/>
              <img src={image3}/>
            </div>
            <div className="div2img" style={{position: "absolute"}}>
              <img src={image4}/>
              <img src={image5}/>
              <img src={image6}/>
            </div>
          </div>
            <div className="Navigation">
              <Link to="/about"><button className="AboutMeButton"><b>ABOUT ME</b></button></Link>
              <button className="navButtons">Extra button</button>
              <button className="navButtons">Extra button</button>
            </div> 
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
