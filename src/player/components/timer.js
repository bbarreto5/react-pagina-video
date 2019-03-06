import React from 'react';
import './timer.css';


/**
 * no deberia estar aquí
 * estos dos metodos
 **/
function estandarTime(numero){
    let pad = "00"
    return pad.substring(0,pad.length - numero.length) + numero; 
} 

function ParseTime(secons){
    let minutos = parseInt(secons / 60, 10);
    let segundos = parseInt(secons % 60, 10);
    return  `${estandarTime(minutos.toString())} : ${estandarTime(segundos.toString())}`;
}

function Timer(props){
    return(
        <div className="Timer">
            <span>{ParseTime(props.currentTime)} / {ParseTime(props.duration)}</span>
        </div>
    )
}
export default Timer;