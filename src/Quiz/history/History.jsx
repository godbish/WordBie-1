import { useEffect } from 'react'
import { useState, useMemo } from 'react'
import './apps.css'
import Quizs from './Quizs'
import Timer from './Timer'
import { Link } from 'react-router-dom'

function History() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [scored, setScored] = useState('0')
  const data = [
    {
      id: 1,
      question: 'To be ________ means to have a good characteristic',
      answers: [
        {
          text: 'Aesthetic',
          correct: true,
        },
        {
          text: 'Amicable',
          correct: false,
        },
        {
          text: 'Anachronistic',
          correct: false,
        },
        {
          text: 'Arid',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: 'To ________ means to make less, or become less.',
      answers: [
        {
          text: 'Abdicate',
          correct: false,
        },
        {
          text: 'Asylum',
          correct: false,
        },
        {
          text: 'Adversity',
          correct: false,
        },
        {
          text: 'Abate ',
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: '________ means chronically misplaced.',
      answers: [
        {
          text: 'Amicable',
          correct: false,
        },
        {
          text: 'Aesthetic',
          correct: false,
        },
        {
          text: 'Adversity',
          correct: false,
        },
        {
          text: 'Anachronist ',
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: 'To ________ yourself means to stop yourself from doing something.',
      answers: [
        {
          text: 'Abstain',
          correct: true,
        },
        {
          text: 'Abate',
          correct: false,
        },
        {
          text: 'Arid',
          correct: false,
        },
        {
          text: 'Asylum',
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: 'Imply (verb)',
      answers: [
        {
          text: 'To say no to something, usually politely',
          correct: false,
        },
        {
          text: 'To show or suggest indirectly',
          correct: true,
        },
        {
          text: 'To admire someone',
          correct: false,
        },
        {
          text: 'Not to do something',
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: 'Decline (verb)',
      answers: [
        {
          text: 'To say no to something, usually politely',
          correct: true,
        },
        {
          text: 'To show or suggest indirectly',
          correct: false,
        },
        {
          text: 'To admire someone',
          correct: false,
        },
        {
          text: 'Not to do something',
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: 'Appropriate (adjective)',
      answers: [
        {
          text: 'Admirable',
          correct: false,
        },
        {
          text: 'Common, shared',
          correct: false,
        },
        {
          text: 'Possible',
          correct: false,
        },
        {
          text: 'Proper, suitable',
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: 'Mutual (adjective)',
      answers: [
        {
          text: 'Admirable',
          correct: false,
        },
        {
          text: 'Possible',
          correct: false,
        },
        {
          text: 'Common, shared by two or more people toward one another',
          correct: true,
        },
        {
          text: 'Proper, suitable',
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: 'Respect (noun)',
      answers: [
        {
          text: 'Admiration',
          correct: true,
        },
        {
          text: 'Retiree',
          correct: false,
        },
        {
          text: 'Expectation',
          correct: false,
        },
        {
          text: 'Representation',
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: 'Retiree (noun) (noun)',
      answers: [
        {
          text: 'A person who is working',
          correct: false,
        },
        {
          text: 'A person who is resting',
          correct: false,
        },
        {
          text: 'A person who is retiring',
          correct: true,
        },
        {
          text: 'A person who is sleeping',
          correct: false,
        },
      ],
    },
  ]
  const handlePlayAgain = () => {
    setStop(false)
  }

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

export default History
