import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './estilo.css';

import {codigoInicial} from './dados';

function Visualizador(){

    const [codigo, setCodigo]= useState(codigoInicial);
  
    return (
        <React.Fragment>
      
            <div className='janela' id='janelaEditor'>
                <div className='topo'>
                    <span><i className="fa-brands fa-free-code-camp"></i> Editor</span>
                    <i className="fa-solid fa-maximize" id='botaoEditor'></i>         
                </div>
                <textarea id='editor' value={codigo} onChange={e => setCodigo(e.target.value)}></textarea>
            </div>
      </React.Fragment>
    );
}

ReactDOM.render(<Visualizador/>, document.querySelector('#root'));