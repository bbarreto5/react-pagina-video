import React from 'react';
import { render } from 'react-dom';
import PlayList from './src/playlist/components/playlist';
import data from './api.json';

const container =  document.getElementById('container');



//ReactDOM.render(que voy a renderizar,donde lo hare);

render(<PlayList data={data}/>,container);
