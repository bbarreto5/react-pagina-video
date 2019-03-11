import React from "react";
import './full-screen.css';
import FullScreenIcon from '../../icons/components/full-screen';

export default function FullScreen(Props){
    return( 
        <div className="FullScreen"
            onClick={Props.ButtonFullScreen}
        >
            <FullScreenIcon
                size={25}
                color="white"
            />
        </div>
    )      
}