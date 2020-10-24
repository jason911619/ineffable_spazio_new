import {HashRouter,Route,Switch} from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import React, { Component } from "react";
import Layout1 from "./Layout1"; //記得要引入


class App extends Component {

  render() {
    return (

      <HashRouter>
            <Switch>
            <Layout1>
                    <Route exact path="/" component={FirstPage}/>
                    <Route path="/second" component={SecondPage}/>
                </Layout1>
            </Switch>
      </HashRouter>
      
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
