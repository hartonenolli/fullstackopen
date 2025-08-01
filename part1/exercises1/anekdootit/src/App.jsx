import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  let mostVotesIndex = 0
  for (let i = 1; i < votes.length; i++) {
    if (votes[i] > votes[mostVotesIndex]) {
      mostVotesIndex = i
    }
  }

  console.log('Votes:', votes);
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={handleVote} text="Vote" />
      <Button onClick={handleNextAnecdote} text="Next Anecdote" />
      <h1>Anecdote with Most Votes</h1>
      <p>
      {anecdotes[mostVotesIndex]}
      </p>
      <p>has {Math.max(...votes)} votes</p>
    </div>
  )
}

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )
  
export default App