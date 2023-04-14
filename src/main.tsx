import React from 'react'
import ReactDOM from 'react-dom/client'
import {Tweet} from './components/Tweet'
import './main.css'
import twitterLogo from './assets/logo-twitter.svg'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'
//components: pequenas partes de interface reutilizaveis


const tweets = [
  'Meu primeiro Tweet',
  'Teste',
  'Deu certo tweetar'
]

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

          {/* .map e key= usado pra determinar a posição e retornar */} 
          {tweets.map(tweet => {
            return <Tweet key={tweet} content={tweet} />
          })}          

        </main>
      </div>
    </div>
  </React.StrictMode>,
)
