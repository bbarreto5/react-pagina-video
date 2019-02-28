import React,{Component} from 'react';
import Media from './media.js';
import './playlist.css'
import Play from '../../icons/components/play.js';
import Volume from '../../icons/components/volume.js';
import Pause from '../../icons/components/pause.js';
import FullScreen from '../../icons/components/full-screen.js';
/*
//componente
class PlayList extends Component {
    render(){

        const playlist = this.props.data.categories[0].playlist;
        return (
                <div className="Playlist">
                    {
                        playlist.map((item) => {
                            return <Media {...item} key={item.id}/>;   
                        })
                    }
                </div>
        );
    }
}*/
//componente funcional (es una funcion y no tiene ciclo de vida)
function PlayList (props){
    return (
            <div className="Playlist">
                
                {
                    props.playlist.map((item) => {
                        return <Media {...item} key={item.id} abrirModal={props.abrirModal}/>;   
                    })
                }
            </div>
    );
}

export default PlayList;