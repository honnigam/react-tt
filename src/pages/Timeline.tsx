import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css'

let newTweet = ''

export function Timeline () {
  //estado
  const [tweets, setTweets] = useState([
    'Meu primeiro Tweet',
    'Teste',
    'Deu certo tweetar'
  ])

  function createNewTweet(event:FormEvent) {
    event.preventDefault()
    tweets.push(newTweet)
  }
  return (
  <main className="timeline">
          <Header title="Home" />

          <form onSubmit={createNewTweet} className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/honnigam.png" alt="Lucas Barcelos" />
              <textarea id="tweet" placeholder="What's happening?" onChange={ (event) => {
                newTweet = event.target.value} }/>     
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