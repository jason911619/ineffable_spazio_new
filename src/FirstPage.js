import React from 'react';
import Layout from "./Layout";
import {Link} from 'react-router-dom';


const FirstPage = ()=>{

const divStyle={

  display: "block",
  fontWeight: "bold",
  /*
  marginLeft:"30px",
  position:"fixed",
  backgroundColor:"rgb(255, 255, 255)",
  paddingLeft: "45%",
  */
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
            <Layout/>
            
            <video autoPlay muted loop id="myVideo">
                <source src="./vmusic.mp4" type="video/mp4"/>
            </video>

            <div className="content" style={divStyle}>
                {/*<h1>Start Exploring</h1>*/}
                <nav>
                <Link style={{ textDecoration: 'none',color: "white",fontSize: "2em" }} to="/second">Start Exploring</Link>
                </nav>
                <button id="myBtn" onClick={myFunction}>Pause</button>
            </div>
   
        </div>
    );
}

export default FirstPage;

