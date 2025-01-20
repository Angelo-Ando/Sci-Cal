import React, { useState } from 'react';
import './App.css'
import geloImage from '/src/img/gelo.jpg'
import hellImage from '/src/img/hell.jpg'
import turtleImage from '/src/img/turtle.jpg'
import rustImage from '/src/img/rust.jpg'
import catImage from '/src/img/cat.jpg'
import loveImage from '/src/img/love.jpg'
import kidsImage from '/src/img/kids.jpg'

function App() {
  const [image1, setImage1] = useState(hellImage)
  const [image2, setImage2] = useState(turtleImage)
  const [image3, setImage3] = useState(rustImage)

function handleClick () { 
  setImage1(catImage);
  setImage2(loveImage);
  setImage3(kidsImage);
}

  return (
    <>
      <div>
        <p>Click my image to see my other portfolio.</p>

        <a href="https://andoangeloportfolio.my.canva.site/" target="_blank">
           <img src={geloImage} className="gelo"/>
        </a>

        <h1>Hi, I'm Angelo!</h1>
        <h2>look at my fanarts!</h2>

        <div classname="Image">
          <img src={image2}/>
          <img src={image1}/>
          <img src={image3}/>
        </div>

        <button onClick ={handleClick}>Click me to see more!</button>
        <p>reload to see the previous ones.</p>
      </div>
    </>
  )
}

export default App
