import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
//import PlayList from './src/playlist/components/playlist';
import data from '../../api.json';

const container =  document.getElementById('home-container');



//ReactDOM.render(que voy a renderizar,donde lo hare);

render(<Home data={data} />,container);
