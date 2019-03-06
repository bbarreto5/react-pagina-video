import React from 'react';
import './play-pause.css';
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'
export default function PlayPause(props){
    return (
        <div className="PlayPause">
            {
                props.pause ?
                    <button onClick={props.cambiarPausaPlay}>
                        <Play size={25} color="white"/>
                    </button>
                :
                    <button onClick={props.cambiarPausaPlay}>
                        <Pause size={25} color="white"/>
                    </button>
            }
            
            
        </div>
    )
}