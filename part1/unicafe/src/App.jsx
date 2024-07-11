import { useState } from 'react'

const Button = ( {handleClick, text} ) => <button onClick={handleClick}>{text}</button>

const Display = ( {value, text} ) => <p>{text} {value}</p>

const Statistics = ( {statistic, text} ) => <p>{text} {statistic}</p>

const App = () => {
  // save clicks of each button to its own state
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
        <Display value={good} text='good'/>
        <Display value={neutral} text='neutral'/>
        <Display value={bad} text='bad'/>
        <Statistics statistic={all} text='all'/>
        <Statistics statistic={average} text='average'/>
        <Statistics statistic={positive} text='positive'/>
      </div>
    </div>
  )
}

export default App
