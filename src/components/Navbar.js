import React from "react";
// import myVideo from "./images/Videohome.mp4";
import videoTwo from "./images/2ndVideo.mp4";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#createResume">CreateResume</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div id="video-container">
        {/* <video autoPlay muted loop id="background-video">
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <video autoPlay muted loop id="background-video null-class">
          <source src={videoTwo}/>
        </video>
      </div>
    </div>
  );
}

export default Navbar;
