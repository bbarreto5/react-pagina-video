import React, {Component}from 'react';
import './video.css';

export default class Video extends Component{
    render(){
        return (
            <div className="Video">
                <video
                    autoPlay={this.props.autoPlay}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </div>
            
        )
    }

}