import React from 'react'
import ReactDOM from 'react-dom/client'
import {Tweet} from './components/Tweet'
import './main.css'
//components: pequenas partes de interface reutilizaveis

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <Tweet user="Vanessa" likes ={10}>
        Teste 1 
      </Tweet> 
      <Tweet user="William">
        Teste 2   
      </Tweet> 
      <Tweet user="Diego"> 
        Teste 3
      </Tweet>
      <Tweet user="Lucas"> 
        Teste 4
      </Tweet>
    </div> 
    
  </React.StrictMode>,
)
