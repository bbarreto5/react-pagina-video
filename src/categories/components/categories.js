import React from 'react';
import Category from './category';
import './categories.css';

function Categories(props){
    return (
        <div className="Categories">
            {
                props.categories.map( ( item ) =>{
                    return <Category key={item.id} {...item} abrirModal = {props.abrirModal}/>;
                })
            }
        </div>
    )
}

export default Categories;