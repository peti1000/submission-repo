import { useState } from 'react'

const Button = ( {handleClick, text} ) => <button onClick={handleClick}>{text}</button>

const Display = ( {value, text} ) => <p>{text} {value}</p>

const Statistics = ( props ) => {
  if (props.all == 0) {
    return <p>No feedback given</p>
  }
  return(
    <>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
    </>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicks = () => setGood(good + 1)
  const handleNeutralClicks = () => setNeutral(neutral + 1)
  const handleBadClicks = () => setBad(bad + 1)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all * 100

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGoodClicks} text='good'/>
        <Button handleClick={handleNeutralClicks} text='neutral'/>
        <Button handleClick={handleBadClicks} text='bad'/>
      </div>
      <h1>statistics</h1>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} average={average} all={all} positive={positive}/>
      </div>
    </div>
  )
}

export default App
