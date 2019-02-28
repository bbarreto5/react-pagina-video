import React, {Component} from 'react';
import PaginaError from '../components/pagina_error';
class Error extends Component{
    state = {
        error: false
    }
    componentDidCatch(errores,info){
        //enviar el error aun servicio como 
        this.setState({
            error: true
        })
    }
    render(){
        if(this.state.error){
            return <PaginaError />
        }
        return this.props.children;
        
    }
}
export default Error;

