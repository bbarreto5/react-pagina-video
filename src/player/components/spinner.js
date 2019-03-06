import React from 'react';
import './spinner.css';

export default function Spinner(props){
    return(
        <div className="Spinner">
        {
            props.active &&
            <span>Cargando...</span>
        }
            
        </div>
    )
}