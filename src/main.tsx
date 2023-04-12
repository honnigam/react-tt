import React from 'react'
import ReactDOM from 'react-dom/client'
import {Tweet} from './components/Tweet'
import './main.css'
import {House} from 'phosphor-react'
import twitterLogo from './assets/logo-twitter.svg'
//components: pequenas partes de interface reutilizaveis

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="logo" />
      
      <nav className="main-navigation">
      <a href="">
        <House/> Home
      </a>
      <a href="">Explore</a>
      <a href="">Notifications</a>
      <a href="">Messages</a>
      <a href="">Bookmarks</a> 
      <a href="">Lists</a>
      <a href="">Profile</a>
      <a href="">More</a>
      </nav>

      <button className="new-tweet" type="button">Tweet</button>
      </aside>
      <div className="content">

      </div>
    </div>
  </React.StrictMode>,
)
