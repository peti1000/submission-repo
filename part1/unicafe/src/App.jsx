import { useState } from 'react'

const Button = (props) => {
  return (
    <>
    <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const Display = (props) => {
  return (
    <>
    <p>{props.text} {props.value}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicks = () => setGood(good + 1)
  const handleNeutralClicks = () => setNeutral(neutral + 1)
  const handleBadClicks = () => setBad(bad + 1)

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
      </div>
    </div>
  )
}

export default App
