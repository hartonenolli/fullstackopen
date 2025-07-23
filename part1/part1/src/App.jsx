const App = () => {
  const ika = 25;
  const nimi = "Jaska";
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Heikki" age={10+11}/>
      <Hello name={nimi} age={ika}/>
      <Hello name="Anni" age={33}/>
    </div>
  )
}

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

export default App