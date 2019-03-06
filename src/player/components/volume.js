import React from 'react';
import './volume.css';
import ImageIcon from '../../icons/components/volume';

export default function Volumen(props){
    return(
        <button className="Volume">
            <ImageIcon color ="white" size = {25}/>
            <div className="Volume-range">
                <input 
                    type="range"
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.cambioVolumen}/>
            </div>
        </button >
    )
}