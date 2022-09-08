import React from "react";
import he from 'he'

export default function Quiz({quizData, chosenAnswer, gameOver, checkAnswer, result, showResult, isDisabled, isChecked}){

  


  const quizElements = quizData.map(quiz=>{

  const  {question, answers, selectedAnswer, correctAnswer} = quiz

    return(
      <div className="quizDiv" key={Math.random()}>
        <div className="question">
       {he.decode(question)}
         </div>
         
      <div className="answerDiv">
      {answers.map(ans=>{

      const styles= {
        backgroundColor: ans === selectedAnswer ? "#35a0d5" : "",
        color: ans === selectedAnswer ? "#fff" : "",
        transition: "background-Color 1s"
      }

      const styles2 = {

        backgroundColor: 
        ans === correctAnswer? "#0d9c3d" : ans === selectedAnswer && ans === correctAnswer ? "#0d9c3d" :
        ans === selectedAnswer ? "#e71a1a" : 
        "",
        animation:
        ans === correctAnswer? "check 2s" : ans === selectedAnswer && ans === correctAnswer ? "check 2s" :
        ans === selectedAnswer ? "check 2s" : 
        "",
      }


    return <button className="answer" style={!showResult? styles : styles2} key={Math.random()} onClick={()=> chosenAnswer(ans, quiz)} disabled={isDisabled}>{he.decode(ans)}</button>
        })}
        </div>
      </div>
    )
  })

  return(
    <div className="container">
      <div className="quiz-container">
      {quizElements}
      </div>
      {gameOver &&
      <div className="check-answer">
      <button className={isChecked ? "check-btn checked" : "check-btn"} isChecked={isChecked} onClick={checkAnswer}>{isChecked ? 'Restart' : 'Check Answer'}</button>
      {showResult && <div> Your Score: {result}/{quizData.length}</div>}
      </div>
      }
      </div>

  )
}