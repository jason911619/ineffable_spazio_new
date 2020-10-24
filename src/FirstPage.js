import React from 'react';
import Layout from "./Layout";



const FirstPage = ()=>{

 /* const StyleSheet={
    width:"100vw",
    height:"100vh",
    backgroundColor:"#FF2E63",
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column"
}
*/

   var video = document.getElementById("myVideo");
    var btn = document.getElementById("myBtn");

function myFunction() {
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
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>我是第一頁</h1>
            <Layout/>
            
            <video autoPlay muted loop id="myVideo">
                <source src="./vmusic.mp4" type="video/mp4"/>
            </video>

            <div className="content">
                <h1>Start Exploring</h1>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>
                <button id="myBtn" onClick={myFunction}>Pause</button>
            </div>
   
        </div>
    );
}

export default FirstPage;

