import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css'

let newTweet = ''

export function Timeline () {
  //estado
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro Tweet',
    'Teste',
    'Deu certo tweetar'
  ])

  function createNewTweet(event:FormEvent) {
    event.preventDefault()
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotkeySubmit (event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setTweets ([newTweet, ...tweets])  //submit
      setNewTweet('') 
      }
  } 

  return (
  <main className="timeline">
          <Header title="Home" />

          <form onSubmit={createNewTweet} className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/honnigam.png" alt="Lucas Barcelos" />
              <textarea id="tweet" 
              placeholder="What's happening?"
              value={newTweet} 
              onKeyDown={handleHotkeySubmit}
              onChange={ (event) => {
                setNewTweet(event.target.value)}}/>     
            </label>
            <button type="submit">Tweet</button>
          </form>

          <Separator />

          {/* .map e key= usado pra determinar a posição e retornar */} 
          {tweets.map(tweet => {
            return <Tweet key={tweet} content={tweet} />
          })}          

        </main>
)
}