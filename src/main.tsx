import React from 'react'
import ReactDOM from 'react-dom/client'
import {Tweet} from './components/Tweet'
import './main.css'
import twitterLogo from './assets/logo-twitter.svg'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'
//components: pequenas partes de interface reutilizaveis

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />
      <div className="content">
        <main className="timeline">
          <Header title="Home" />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/honnigam.png" alt="Lucas Barcelos" />
              <textarea id="tweet" placeholder="What's happening?"/>     
            </label>
            <button type="submit">Tweet</button>
          </form>
          <Separator />          
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
