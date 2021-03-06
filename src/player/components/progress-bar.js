import React from 'react';
import './progress-bar.css';

export default function ProgressBar(props){
    return(
        <div className="ProgressBar">
            <input 
                type="range"
                min={0}
                max={props.duration}
                value={props.actual}
                onChange={props.cambiosBar}
                />
        </div>
    )
}