import React , {Component} from 'react';
import VideoPlayerLayout from "../components/video-player-layout";

class VideoPlayer extends Component{
    state = {
        autoPlay:true,
        title:"conejos",
        pause:true
    }
    cambiarPausaPlay = (event) => {
        this.setState({
            pause:!this.state.pause
        })
    }
    render(){
        return(
            <VideoPlayerLayout 
                {...this.state}
                cambiarPausaPlay={this.cambiarPausaPlay}
                />
        )
    }
}

export default VideoPlayer;