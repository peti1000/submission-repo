import { useState } from 'react'

const Button = ( {handleClick, text} ) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ( {value, text} ) => {
  if (text == 'positive') {
    return <p>{text} {value} %</p>
  }
  return <p>{text} {value}</p>
}

const Statistics = ( props ) => {
  if (props.all == 0) {
    return <p>No feedback given</p>
  }
  return(
    <>
      <StatisticLine text='good' value={(props.good)}/>
      <StatisticLine text='neutral' value={(props.neutral)}/>
      <StatisticLine text='bad' value={(props.bad)}/>
      <StatisticLine text='all' value={(props.all)}/>
      <StatisticLine text='average' value={(props.average)}/>
      <StatisticLine text='positive' value={(props.positive)}/>
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
