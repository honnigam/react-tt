import React from 'react'
import ReactDOM from 'react-dom/client'


const editUser = true
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <p>Teste</p>
      <button>{editUser ? 'Editar usuário' : 'Criar usuário'}</button>
    </div>
  </React.StrictMode>,
)
