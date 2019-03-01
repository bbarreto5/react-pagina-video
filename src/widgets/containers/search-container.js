import React, {Component} from 'react';
import Search from '../components/search';

class SearchContainer extends Component{
    state = {
        valorInput:"jose jose"
    }    
    envioBusquedad = (event) => {
        event.preventDefault();
        /*
         * forma no adecuada
         * console.log(document.getElementById("prueba").value);
         */
        console.log(this.input.value,'Submit');
    }
    /**
     * si solo se pasa un parametro se puede escribir asi
     * variable = parametro =>{}
     */
    setRefSearch = element =>{
        this.input = element; 
    }
    cambiarEntradaBusqueda = event =>{
        console.log(event);
        this.setState({
            valorInput:event.target.value.replace(' ','-')
        })
    }
    render(){
        return (
            <Search 
                setRefSearch = {this.setRefSearch}
                envioBusquedad = {this.envioBusquedad}
                cambiarEntradaBusqueda = {this.cambiarEntradaBusqueda}
                valorInput={this.state.valorInput}
                />
        )
    }
}
export default SearchContainer;