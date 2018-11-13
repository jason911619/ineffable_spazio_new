import React, { Component } from "react";

class ITManPlayer extends Component {
  constructor(props) {
    super(props);
    this.player = React.createRef();
  }

  render() {
    let {
      controls,
      autoplay,
      preload,
      poster,
      loop,
      src,
      muted,
      fluid,
      width,
      height
    } = this.props;

    const options = JSON.stringify({
      controls,
      autoplay,
      preload,
      poster,
      loop,
      width,
      fluid,
      height,
      sources: [{ src }],
      muted
    });
    return (
      <video
        className="video-js vjs-big-play-centered vjs-ehs"
        data-setup={options}
        ref={this.player}
      />
    );
  }
  componentDidMount() {
    let { eventON } = this.props;
    const videoNode = this.player.current;
    this.video = window.videojs(videoNode);

    // 監聽事件
    if(eventON){
      Object.keys(eventON).forEach(item => {
        this.video.on(item, () => {
        eventON[item]()
        });
      });
    }

  }
  componentWillUnmount() {
    if (this.video) {
      this.video.dispose();
    }
  }
}

ITManPlayer.defaultProps = {
  controls: true,
  autoplay: false,
  preload: false,
  poster: null,
  loop: false,
  src: null,
  muted: false,
  autoScale: true,
  width: 0,
  height: 0,
  fluid:true
};
export default ITManPlayer;
