import React from 'react'
import ReactDOM from 'react-dom/client'
import { Sidebar } from './components/Sidebar'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import './main.css'
//components: pequenas partes de interface reutilizaveis

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
