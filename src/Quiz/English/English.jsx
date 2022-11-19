import { useEffect } from 'react';
import { useState ,useMemo} from 'react'
import { Link } from 'react-router-dom';
import './apps.css'
import Quizs from "./Quizs"
import Timer from './Timer';


function English() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [scored, setScored]= useState ("0")
  const data = [
    {
      id: 1,
      question: 'You should explain this ___ them.',
      answers: [
        {
          text: 'To ',
          correct: true,
        },
        {
          text: 'With',
          correct: false,
        },
        {
          text: 'At',
          correct: false,
        },
        {
          text: 'Among',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: 'He has been absent ___ Monday.',
      answers: [
        {
          text: 'For',
          correct: false,
        },
        {
          text: 'Since ',
          correct: true,
        },
        {
          text: 'From',
          correct: false,
        },
        {
          text: 'All of the above',
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "I haven't been to the theatre ___ a long time.",
      answers: [
        {
          text: 'For',
          correct: true,
        },
        {
          text: 'Since',
          correct: false,
        },
        {
          text: 'From',
          correct: false,
        },
        {
          text: 'After',
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: 'He goes ___ school by car.',
      answers: [
        {
          text: 'To',
          correct: true,
        },
        {
          text: 'By ',
          correct: false,
        },
        {
          text: 'On',
          correct: false,
        },
        {
          text: 'All of the above',
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: 'This is a comfortable house to live ___. ',
      answers: [
        {
          text: 'At ',
          correct: false,
        },
        {
          text: 'In',
          correct: true,
        },
        {
          text: 'On',
          correct: false,
        },
        {
          text: 'All of the above',
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: 'They are called ___ different names.',
      answers: [
        {
          text: 'With',
          correct: false,
        },
        {
          text: 'By' ,
          correct: true,
        },
        {
          text: 'For',
          correct: false,
        },
        {
          text: 'From',
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: 'We should not spend money ___ luxuries.',
      answers: [
        {
          text: 'For',
          correct: false,
        },
        {
          text: 'With',
          correct: false,
        },
        {
          text: 'On',
          correct: true,
        },
        {
          text: 'By',
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: 'I gave him a chair to sit ___.',
      answers: [
        {
          text: 'On',
          correct: true,
        },
        {
          text: 'In',
          correct: false,
        },
        {
          text: 'By',
          correct: false,
        },
        {
          text: 'Upon',
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: 'The new term begins ___ June 1st.',
      answers: [
        {
          text: 'On',
          correct: true,
        },
        {
          text: 'In',
          correct: false,
        },
        {
          text: 'At',
          correct: false,
        },
        {
          text: 'From',
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: 'He poured the tea ___ the mug. ',
      answers: [
        {
          text: 'In',
          correct: false,
        },
        {
          text: 'Into',
          correct: true,
        },
        {
          text: 'On',
          correct: false,
        },
        {
          text: 'Onto',
          correct: false,
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

export default English
