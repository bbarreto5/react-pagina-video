import React, { PureComponent } from 'react';
import './media.css'
import PropTypes from 'prop-types';

class Media extends PureComponent{
    //ESC6
    constructor(props){
        super(props);
        this.MostrarTitulo = this.MostrarTitulo.bind(this);
        this.state ={
            author: props.author,
            title: props.title,
            cover: props.cover,
            src: props.src,
        }
    }
    MostrarTitulo(){
        console.log(this.props.title);
        this.setState({
            author: 'jose gomez',
            title: 'la vida es bella',
            cover: './imagenes/imagen3.jpg'
        });
    }
    //ESC7
    state = {
        author:'daniela fernanda'
    }
    MostrarAuthor = (event) =>{
        console.log(this.props.author);
    }
    MostrarImage = (event) =>{
        console.log(this.props.cover);
        this.setState({
            author: 'jose gomez',
            title: 'la vida es bella',
            cover: './imagenes/imagen2.jpg',
        });
    }
    render(){
        //instancea los estados de las propiedades
        const {title, author, cover ,src} = this.state;
        //instancea las propiedades
        //const {title, author, image} = this.props;
        return (
            <div className="Media">
                <div className="Media-cover" onClick={this.props.abrirModal}>
                    <img className="Media-image"
                        src ={cover} 
                        width = {260}
                        height={160}
                    />
                    <h3 className="Media-title">{title}</h3>
                    <p className="Media-author">{author}</p>
                </div>
            </div>
        )
    }
}
//validar los datos que recibe la clases
Media.propTypes={
    title: PropTypes.string,
    author: PropTypes.string.isRequired,
    cover: PropTypes.string,
    type: PropTypes.oneOf(['video','audio']),
    src: PropTypes.string,
}
export default Media;