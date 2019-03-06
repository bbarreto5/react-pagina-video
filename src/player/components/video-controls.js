import React from 'react';
import './video-controls.css';
function VideoControls(props){
    return(
        <div className="VideoControls">
            {
                props.children
            }
        </div>
    )
} 
export default VideoControls;