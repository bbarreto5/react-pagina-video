import React from 'react';
import './search.css';
/*
//forma tradicional
function Search(props){
    return (
        <Search/>
    )
    
}*/

/**
 * con esta estructura indicamos que lo que esta dentro de "()" se retornara
 * ()=>( todo lo que vaya aqui se retornara )
 */

const Search = (props) => (
    <form action="" className="Search" onSubmit={props.envioBusquedad}>
        <input
            ref={props.setRefSearch}
            placeholder="Search"
            type="text"
            className="Search-input"
            name="Search"
            onChange={props.cambiarEntradaBusqueda}
            value={props.valorInput}
        />
    </form>
);
export default Search;