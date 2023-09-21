import React from 'react'


function Navbar() {
  return (
    <div >
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#createResume">CreateResume</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
     
<div id="video-container">
        <video autoPlay muted loop id="background-video">
            <source src="/video/Untitled design.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          </div>
    </div>
  )
}

export default Navbar
