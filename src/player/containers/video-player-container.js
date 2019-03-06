import React , {Component} from 'react';
import VideoPlayerLayout from "../components/video-player-layout";

class VideoPlayer extends Component{
    state = {
        autoPlay:false,
        title:"conejos",
        pause:true,
        duration:0,
        currentTime:0,
        loading: false
    }
    cambiarPausaPlay = (event) => {
        this.setState({
            pause:!this.state.pause
        })
    }
    componentDidMount(){
        this.setState({
            pause: (!this.state.autoPlay)
        })
    }
    LoadedMetadata = event =>{
        this.video = event.target;
        this.setState({
            duration:this.video.duration
        })
    }
    TimeUpdate = event =>{
        this.setState({
            currentTime: this.video.currentTime
        })
    }
    cambiosBar = event =>{
        this.video.currentTime = event.target.value;
    }
    moviendo = event =>{
        this.setState({
            loading: true,
        })
    }
    movido = event =>{
        this.setState({
            loading: false,
        })
    }
    cambioVolumen = event =>{
        this.video.volume = event.target.value;
    }

    render(){
        return(
            <VideoPlayerLayout 
                {...this.state}
                LoadedMetadata = { this.LoadedMetadata }
                cambiarPausaPlay = { this.cambiarPausaPlay }
                TimeUpdate = { this.TimeUpdate }
                cambiosBar = { this.cambiosBar }
                movido = { this.movido }
                moviendo = { this.moviendo }
                cambioVolumen = { this.cambioVolumen }
                />
        )
    }
}

export default VideoPlayer;