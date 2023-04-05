import React from 'react'
import ReactDOM from 'react-dom/client'
import {Tweet} from './components/Tweet'

//components: pequenas partes de interface reutilizaveis

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <Tweet user="Lucas"   content="meu primeiro tweet"/>
      <Tweet user="Vanessa" content="meu segundo tweet"/>
      <Tweet user="William">
      Testaaaando          {/* //metodo children */}
      </Tweet> 
      <Tweet user="Diego"> {/* //metodo children */}
      Testando
      </Tweet>
    </div> 
  </React.StrictMode>,
)
