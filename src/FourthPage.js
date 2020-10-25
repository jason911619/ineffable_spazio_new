import React from 'react';
import {Link} from 'react-router-dom';

const FourthPage = ()=>{

const navStyle={
    position:"fixed",
    top:"0",
    left:"0",
    width:"100%",
    height:"10vh",
    backgroundColor:"rgb(255, 255, 255)",
    display:"flex",
    alignItems:"center"
};

const divStyle={
    marginLeft:"30px",
    position:"fixed",
    backgroundColor:"rgb(255, 255, 255)",
    paddingLeft: "45%",
};

function myFunction() {

  var video = document.getElementById("myVideo");
  var btn = document.getElementById("myBtn");

  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

    return (
        <div>
            <div className="nav-bar" style={navStyle}>
              <div className="nav-brand" style={divStyle}>
                <nav>
                    <Link style={{ textDecoration: 'none',color: "black",fontSize: "1.5em",textAlign: "center" }} to="/fourth">設計/工程</Link>
                </nav>
              </div>
            </div>
            
            <video autoPlay muted loop id="myVideo">
                <source src="./vmusic.mp4" type="video/mp4"/>
            </video>

            <div className="content">
                <button id="myBtn" onClick={myFunction}>Pause</button>
            </div>
   
        </div>
    );
}

export default FourthPage;

