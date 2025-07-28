import { useState } from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log('rendering app');
  console.log('good', good, 'neutral', neutral, 'bad', bad);
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <Average good={good} neutral={neutral} bad={bad} />
      <p>positive {good / (good+neutral+bad) *100}%</p>
    </div>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Average = ({ good, neutral, bad }) => {
  let points = good + neutral + bad
  return <p>average {(good - bad) / points} </p>
}

export default App