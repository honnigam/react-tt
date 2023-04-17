import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css'

const tweets = [
  'Meu primeiro Tweet',
  'Teste',
  'Deu certo tweetar'
]

export function Timeline () {
  return (
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
)
}