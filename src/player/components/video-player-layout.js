import React from "react";
import './video-player-layout.css'
import Video from './video';
import Title from './title';
import PlayPause from './play-pause';
import Timer from './timer';
import VideoControls from './video-controls';
import ProgressBar from './progress-bar';
import Spinner from './spinner';
import Volume from './volume'
import FullScreen from './full-screen'


const VideoPlayerLayout = (props)=>{
    
    return(
        <div  
            ref = { props.setRef }
            className="VideoPlayerLayout">
            <Title title={props.title} />
            <VideoControls>
                <PlayPause pause={props.pause} cambiarPausaPlay={props.cambiarPausaPlay} />
                <Timer currentTime={props.currentTime} duration={props.duration}/>
                <ProgressBar duration={props.duration} actual={props.currentTime} cambiosBar={props.cambiosBar}/>
                <Volume cambioVolumen={props.cambioVolumen}/>
                <FullScreen ButtonFullScreen={props.ButtonFullScreen}/>
            </VideoControls>
            <Spinner active = {props.loading}/>
            <Video 
                TimeUpdate = {props.TimeUpdate}
                LoadedMetadata = {props.LoadedMetadata}
                autoPlay = {props.autoPlay} 
                pause = {props.pause}
                moviendo = {props.moviendo}
                movido = {props.movido}
                src = { props.src }/>
        </div>
    )
}
export default VideoPlayerLayout;