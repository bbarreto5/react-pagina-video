import React from "react";
import './video-player-layout.css'
import Video from './video';
import Title from './title';
import PlayPause from './play-pause';

const VideoPlayerLayout = (props)=>{
    return(
        <div className="VideoPlayerLayout">
            <Title title={props.title} />
            <PlayPause pause={props.pause} cambiarPausaPlay={props.cambiarPausaPlay} />
            <Video autoPlay={props.autoPlay}/>
        </div>
    )
}
export default VideoPlayerLayout;