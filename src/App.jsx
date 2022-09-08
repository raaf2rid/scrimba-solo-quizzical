import { useState, useEffect } from "react";
import "./index.css";
import Quiz from "./Components/Quiz";
import Spinner from "./Components/Spinner";
import Settings from "./Components/Settings";

function App() {
  const [quizData, setquizData] = useState([]);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [savedAnswers, setSavedAnswers] = useState([]);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    id: "",
    difficulty: "",
    type: "",
    amount: 5,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function startGame() {
    setIsLoading(true);

    const url = `https://opentdb.com/api.php?amount=${settings.amount}&category=${settings.id}&difficulty=${settings.difficulty}&type=${settings.type}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.response_code === 1) {
          setIsLoading(false);
          setIsError(true);
          setGameOn(false);
          setSettings({
            id: "",
            difficulty: "",
            type: "",
            amount: 5,
          });
        } else {
          showQuiz(data);
          setGameOn(true);
        }
      });

    console.log(quizData);
  }

  function showQuiz(data) {
    setquizData(
      data.results.map((quiz) => ({
        question: quiz.question,
        answers: shuffleArray([...quiz.incorrect_answers, quiz.correct_answer]),
        correctAnswer: quiz.correct_answer,
      }))
    );

    setIsLoading(false);
  }

  useEffect(() => {
    setSavedAnswers(
      quizData
        .filter((i) => {
          return i.selectedAnswer;
        })
        .map((j) => {
          return j.selectedAnswer;
        })
    );
  }, [quizData]);

  useEffect(() => {
    if (savedAnswers.length > 0 && savedAnswers.length === quizData.length) {
      setGameOver(true);
    }
  }, [savedAnswers]);

  function handleSettings() {
    setShowSettings(true);
  }

  function chosenAnswer(answer, obj) {
    setquizData((prev) =>
      prev.map((item) => {
        const newObj = { ...obj, selectedAnswer: answer };

        return item.question === obj.question ? newObj : item;
      })
    );
  }

  function restart() {
    if (isChecked) {
      setIsChecked(false);
      setGameOver(false);
      setGameOn(false);
      setIsDisabled(false);
      setShowResult(false);
      setSettings({
        id: "",
        difficulty: "",
        type: "",
        amount: 5,
      });
    }
  }

  function checkAnswer(obj) {
    const correctAnswers = obj.map((item) => item.correctAnswer);
    const selectedAnswers = obj.map((item) => item.selectedAnswer);

    const result = selectedAnswers.filter(
      (item, i) => item === correctAnswers[i]
    ).length;

    setResult(result);

    setShowResult(true);

    console.log(isDisabled);

    setIsDisabled(true);

    setIsChecked(true);

    restart();
  }

  function handleChange(option, attr) {
    const { name } = attr;
    const { value } = option;

    setSettings((prevSettings) => {
      return {
        ...prevSettings,
        [name]: value,
      };
    });
  }
  function goHome() {
    setShowSettings(false);
    setIsError(false);
    console.log(settings);
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : showSettings ? (
        <Settings
          settings={settings}
          handleChange={handleChange}
          goHome={goHome}
        />
      ) : !gameOn ? (
        <div className="homepage">
          <h3>
            Qu
            <span>i</span>
            <span className="relative-class">z</span>z<div>i</div>
            <span className="relative-class">c</span>al
          </h3>
          <div className="homepage-buttons">
            <button onClick={handleSettings}>Settings</button>
            <button onClick={startGame}>Start Game</button>
          </div>
          {isError && (
            <p className="error-message">
              No quiz found! Please change the settings.
            </p>
          )}
        </div>
      ) : (
        <div>
          <Quiz
            quizData={quizData}
            chosenAnswer={chosenAnswer}
            gameOver={gameOver}
            checkAnswer={() => checkAnswer(quizData)}
            result={result}
            showResult={showResult}
            isDisabled={isDisabled}
            isChecked={isChecked}
          />
        </div>
      )}
    </>
  );
}

export default App;
