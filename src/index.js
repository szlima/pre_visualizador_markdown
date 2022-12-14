import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './estilo.css';

import {codigoInicial} from './dados';

function Visualizador(){

    const [codigo, setCodigo]= useState(codigoInicial);
  
    const resize= (idJanela, idBotao) => {
        const JANELA_ATUAL= document.querySelector(idJanela);
        const JANELA_OCULTA= idJanela === '#janelaEditor' ? 
            document.querySelector('#janelaPreview') : 
            document.querySelector('#janelaEditor');
        const AREA_INTERNA= idJanela === '#janelaEditor' ? 
            document.querySelector('#editor') : 
            document.querySelector('#preview');
        const BOTAO= document.querySelector(idBotao);    
    
        if(BOTAO.classList.contains('fa-maximize')){
            BOTAO.classList.remove('fa-maximize');
            BOTAO.classList.add('fa-down-left-and-up-right-to-center');
            
            JANELA_ATUAL.style.height= '1000px';      
            JANELA_OCULTA.style.display= 'none';
            
            if(idJanela === '#janelaEditor')
                AREA_INTERNA.style.height= '970px';
            else
                AREA_INTERNA.style.minHeight= '970px';
        }else{
            BOTAO.classList.remove('fa-down-left-and-up-right-to-center');
            BOTAO.classList.add('fa-maximize');
            
            JANELA_ATUAL.style.height= 'auto'; 
            JANELA_OCULTA.style.display= 'block';
            
            if(idJanela === '#janelaEditor')
                AREA_INTERNA.style.height= '220px';
            else
                AREA_INTERNA.style.minHeight= '220px';
        }
    };

    return (
        <React.Fragment>
      
            <div className='janela' id='janelaEditor'>
                <div className='topo'>
                    <span><i className="fa-brands fa-free-code-camp"></i> Editor</span>
                    <i className="fa-solid fa-maximize" id='botaoEditor' onClick={() => resize('#janelaEditor', '#botaoEditor')}></i>         
                </div>
                <textarea id='editor' value={codigo} onChange={e => setCodigo(e.target.value)}></textarea>
            </div>

            <div className='janela' id='janelaPreview'>
                <div className='topo'>
                    <span><i className="fa-brands fa-free-code-camp"></i> Previewer</span>
                    <i className="fa-solid fa-maximize" id='botaoPreview' onClick={() => resize('#janelaPreview', '#botaoPreview')}></i>         
                </div>      
                <div id='preview' dangerouslySetInnerHTML={{
            __html: window.marked.parse(codigo, {breaks:true})}}></div>
            </div>

      </React.Fragment>
    );
}

ReactDOM.render(<Visualizador/>, document.querySelector('#root'));