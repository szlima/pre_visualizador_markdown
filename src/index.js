import React from 'react';
import ReactDOM from 'react-dom';

import './estilo.css';

function Visualizador(){

    return (
        <h1>Pré visualizador markdown</h1>
    );
}

ReactDOM.render(<Visualizador/>, document.querySelector('#root'));