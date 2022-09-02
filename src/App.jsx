import { useState, useEffect } from 'react'
import './index.css'
import Quiz from './Components/Quiz'
import Settings from './Components/Settings'



  function App() {

  const [quizData, setquizData] = useState([])
  const [gameOn, setGameOn] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [savedAnswers, setSavedAnswers] = useState([])
  const [result, setResult] =  useState(0)
  const [showResult, setShowResult] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [settings, setSettings] = useState(
    {
        category: "", 
        difficulty: "", 
        type: "", 
        amount: 5
    })

  
  

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}


function startGame(){

  fetch("https://opentdb.com/api.php?amount=5")
  .then(res=> res.json())
  .then(data => setquizData(data.results.map(quiz=>({ question: quiz.question,
     answers: shuffleArray([...quiz.incorrect_answers, quiz.correct_answer]),
     correctAnswer : quiz.correct_answer
  }))))

  setGameOn(true)
  
}

useEffect(()=>{

  setSavedAnswers(quizData.filter(i=>{

    return i.selectedAnswer
      }).map(j => {
    return j.selectedAnswer
  
  })) 

},[quizData])

useEffect(()=>{
  if(savedAnswers.length> 0 && savedAnswers.length===quizData.length){
    setGameOver(true)
  }
},[savedAnswers])

function handleSettings(){
  setShowSettings(true)
  console.log(showSettings)
}



function chosenAnswer(answer, obj){


    setquizData(prev=> prev.map(item=>{
  
      const newObj = {...obj, selectedAnswer: answer}
        
      return item.question === obj.question ? newObj : item
      
      })
      )

  }

function checkAnswer(obj){

    const correctAnswers = obj.map(item=> item.correctAnswer)
    const selectedAnswers = obj.map(item=> item.selectedAnswer)
    
    const result = selectedAnswers.filter((item, i)=> item === correctAnswers[i]).length

    setResult(result)

    setShowResult(true)
    
    console.log(isDisabled)

    setIsDisabled(true)


}



  return (
    <>
    
    {showSettings ? 
     <Settings 
     /> :
    !gameOn ? 
    <div className='homepage'>
      <h3>
        Qu
        <span>i</span>
        <span className='relative-class'>z</span>
        z
        <div>i</div>
        <span className='relative-class'>c</span>al
      </h3>

      <div className='homepage-buttons'>
        <button onClick={handleSettings}>Settings</button>
        <button onClick={startGame}>Start Game</button>
      </div>
    </div> :
    <div>
      <Quiz 
        quizData={quizData}
        chosenAnswer={chosenAnswer}
        gameOver = {gameOver}
        checkAnswer = {()=>checkAnswer(quizData)}
        result = {result}
        showResult= {showResult}
        isDisabled={isDisabled}
        />
    </div>}
    </>
  )

}

export default App