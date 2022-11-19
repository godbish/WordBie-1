import { useEffect } from 'react';
import { useState ,useMemo} from 'react'
import './apps.css'
import Quizs from "./Quizs"
import Timer from './Timer';
import { Link} from 'react-router-dom';

function Grammar() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [scored, setScored]= useState ("0")
  const data = [
    {
      id: 1,
      question: 'Maria said, "It is my car." Convert it into indirect speech.',
      answers: [
        {
          text: 'Maria said that it is my car.',
          correct: false,
        },
        {
          text: 'Maria said that it was her car',
          correct: true,
        },
        {
          text: 'Maria said that it is her car.',
          correct: false,
        },
        {
          text: 'Maria said that it was my car.',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: 'Raj said, "I work here every day." Convert it into indirect speech.',
      answers: [
        {
          text: 'Raj said that he worked there everyday',
          correct: true,
        },
        {
          text: 'Raj said that he worked here yesterday.',
          correct: false,
        },
        {
          text: 'Raj said that he worked here everyday.',
          correct: false,
        },
        {
          text: 'Raj said that he worked everyday.',
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: 'Monica said, "I have finished my homework." Convert it into indirect speech.',
      answers: [
        {
          text: 'Monica said that she has finished my homework.',
          correct: false,
        },
        {
          text: 'Monica said that she has finished her homework.',
          correct: false,
        },
        {
          text: 'Monica said that she had finished my homework.',
          correct: false,
        },
        {
          text: 'Monica said that she had finished her homework.',
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: 'My daughter said to me, "I can sleep alone." Convert it into indirect speech.',
      answers: [
        {
          text: 'My daughter said to me that she can sleep alone.',
          correct: false,
        },
        {
          text: 'My daughter told me that she can sleep alone.',
          correct: false,
        },
        {
          text: 'My daughter said to me that she could sleep alone.',
          correct: false,
        },
        {
          text: 'My daughter told me that she could sleep alone.',
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: 'Leo said, "My friend may come tonight." Convert it into indirect speech.',
      answers: [
        {
          text: 'Leo said that his friend might come tonight.',
          correct: false,
        },
        {
          text: 'Leo said that his friend might come that night.',
          correct: true,
        },
        {
          text: 'Leo said that his friend might go that night.' ,
          correct: false,
        },
        {
          text: 'Leo said that his friend might go tonight.',
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: 'Jullie said to me, "I have to win this game." Convert it into indirect speech.',
      answers: [
        {
          text: 'Jullie told me that she must win this game.',
          correct: false,
        },
        {
          text: 'Jullie told me that she had to win that game.',
          correct: true,
        },
        {
          text: 'Jullie told me that she must win that game.',
          correct: false,
        },
        {
          text: 'Jullie told me that she had to win this game.',
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: 'He said, "I am a man." Convert it into indirect speech.',
      answers: [
        {
          text: 'He said that he was a man.',
          correct: false,
        },
        {
          text: 'He said that he is a man.',
          correct: true,
        },
        {
          text: 'He said that I am a man.',
          correct: false,
        },
        {
          text: 'He said that I was a man.',
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: 'Mary says, "I am coming here." Convert it into indirect speech.',
      answers: [
        {
          text: 'Mary says that she is coming there.',
          correct: true,
        },
        {
          text: 'Mary says that she is coming here.',
          correct: false,
        },
        {
          text: 'Mary says that she was coming there.',
          correct: false,
        },
        {
          text: 'Mary says that she was coming here.',
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: 'My brother said, "I went to school yesterday." Convert it into indirect speech.',
      answers: [
        {
          text: 'My brother said that he had gone to school yesterday.',
          correct: false,
        },
        {
          text: 'My brother said that he had gone to school the day after.',
          correct: false,
        },
        {
          text: 'My brother said that he had gone to school the previous day.',
          correct: true,
        },
        {
          text: 'My brother said that he had gone to school the next day.',
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: 'Mathew said, "I will go to school next year." Convert it into indirect speech.',
      answers: [
        {
          text: 'Mathew said that he would go to school the year before.',
          correct: false,
        },
        {
          text: 'Mathew said that he would come to school the year after.',
          correct: false,
        },
        {
          text: 'Mathew said that he would come to school the year before.',
          correct: false,
        },
        {
          text: 'Mathew said that he would go to school the following year.',
          correct: true,
        },
      ],
    },
  ]
  const handlePlayAgain = () => {
    setStop(false) }
    
const moneyPyramid = useMemo(
  () =>
    [
      { id: 1, point: '100' },
      { id: 2, point: '200' },
      { id: 3, point: '300' },
      { id: 4, point: '400' },
      { id: 5, point: '500' },
      { id: 6, point: '600' },
      { id: 7, point: '700' },
      { id: 8, point: '800' },
      { id: 9, point: '900' },
      { id: 10, point: '1000' },
    ].reverse(),
  []
)

useEffect(() => {
  questionNumber > 1 &&
    setScored(moneyPyramid.find((m) => m.id === questionNumber - 1).point)
}, [questionNumber, moneyPyramid])

return (
  <div className="app">
    <div className="main">
      {stop ? (
        <div className="endtext">
          <h2 className="h1">STRIVE FOR PROGRESS</h2>
          <div>
            <hr className="line" />
          </div>

          <div>
            <h2 className="h2"> FINAL SCORE : {scored}</h2>
          </div>

          <div className="butt">
            <Link to="/quiz">
              <button className="playagain" onClick={handlePlayAgain}>
                PLAY AGAIN
              </button>
            </Link>

            <Link to="/">
              <button className="playagain" onClick={handlePlayAgain}>
              QUIT GAME
              </button>
            </Link>            </div>
        </div>
      ) : (
        <>
          <div className="top">
            <div className="timer">
              <Timer setStop={setStop} questionNumber={questionNumber} />
            </div>
          </div>
          <div className="buttom">
            <Quizs
              data={data}
              setStop={setStop}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            />
          </div>
        </>
      )}
    </div>
    <div className="point">
      <ul className="moneyList"></ul>
    </div>
  </div>
)
}

export default Grammar
