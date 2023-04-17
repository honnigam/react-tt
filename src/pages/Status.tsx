import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

const answers = [
  'Concordo...',
  'Olha, faz sentido',
  'Parabéns pelo progresso'
]

export function Status () {
  return (
    <main className="status">
    <Header title="Tweet" />
    <form className="answer-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/honnigam.png" alt="Lucas Barcelos" />
        <textarea id="tweet" placeholder="Tweet your answer"/>     
      </label>
      <button type="submit">Answer</button>
    </form>
    <Separator />
  
    {answers.map(answers => {
      return <Tweet key={answers} content={answers} />
    })}       

  </main>
  )
}