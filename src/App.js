import React, { Component } from "react";
import ITManPlayer from "./ITManPlayer";
class App extends Component {
  videoPlay = () =>{
    this.ITManPlayer.video.play();
  }
  videoPause= () =>{
    this.ITManPlayer.video.pause();
  }
  render() {
    return (
      <div className="wrap">
        <ITManPlayer
          ref={player => (this.ITManPlayer = player)}
          src="http://www.html5videoplayer.net/videos/toystory.mp4"
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
      </div>
    );
  }
}

export default App;
