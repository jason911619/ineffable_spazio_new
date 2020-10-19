
import { BrowserRouter, Route, Link } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import React, { Component } from "react";


class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
        <FirstPage title="功能選單" />
        <ul>
                        {/*Link組件中的to會改變網址，但不會刷新頁面*/}
                        <li><Link to="/">Infffable Spazio</Link></li>
                        <li><Link to="/about">Contact</Link></li>
                    </ul>
                    <Route path="/" component={FirstPage} />
                    <Route path="/about" component={SecondPage} />
      </div>
  </BrowserRouter>

         /* <video autoPlay muted loop id="myVideo">
            <source src="./vmusic.mp4" type="video/mp4"/>
          </video>

          <div className="content">
            <h1>Start Exploring</h1>
            <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>
            <button id="myBtn" onClick="myFunction()">Pause</button>
          </div>

      <div className="wrap">
        {/*<video width="300" height="300" >
          <source src="./vmusic.mp4" type="video/mp4"/>
          </video>

          <ITManPlayer
          ref={player => (this.ITManPlayer = player)}
          src="./vmusic.mp4"
          type="video/MP4"
          eventON={{
            pause: () => {
              console.log("暫停");
            },
            play: () => {
              console.log("播放");
            }
          }}
        />
        <button onClick={this.videoPlay}>播放</button>
        <button onClick={this.videoPause}>暫停</button>
      </div>*/
 
    );
  }
}

export default App;
