import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'

const answers = [
  'Concordo...',
  'Olha, faz sentido',
  'Parabéns pelo progresso' 
]

export function Status () {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Meu primeiro Tweet',
    'Teste',
    'Deu certo tweetar'
  ])

  function createNewAnswer(event:FormEvent) {
    event.preventDefault()
    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }
  return (
    <main className="status">
    <Header title="Tweet" />
   
    <Tweet content=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio dolore minima quam nemo, fugiat numquam itaque architecto ducimus impedit neque illo. Officia dolor maiores ullam tempora dicta. Quas, expedita enim?"/>

    <Separator />

    <form onSubmit={createNewAnswer} className="answer-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/honnigam.png" alt="Lucas Barcelos" />
        <textarea id="tweet" 
        placeholder="Tweet your answer"
        value={newAnswer}
        onChange={(event) => {setNewAnswer(event.target.value)}}
        />     
      </label>
      <button type="submit">Answer</button>
    </form>
   
  
    {answers.map(answers => {
      return <Tweet key={answers} content={answers} />
    })}       

  </main>
  )
}