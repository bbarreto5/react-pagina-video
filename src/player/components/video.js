import React, {Component}from 'react';
import './video.css';

export default class Video extends Component{
    componentWillReceiveProps(next){
        if(next.pause !== this.props.pause){
            this.PausarPlay(next.pause);
        }
    }
    PausarPlay( valor ){
        if(valor){
            this.video.pause()
        }else{
            this.video.play()
        }
    }
    setRef= element =>{
        this.video = element;
    }
    render(){
        return (
            <div className="Video">
                <video
                    autoPlay={this.props.autoPlay}
                    ref={this.setRef}
                    onLoadedMetadata={this.props.LoadedMetadata}
                    onTimeUpdate={this.props.TimeUpdate}
                    onSeeking = { this.props.moviendo }
                    onSeeked = { this.props.movido }
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </div>
            
        )
    }

}