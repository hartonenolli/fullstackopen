const App = () => {
  const ika = 25;
  const nimi = "Jaska";
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Heikki" age={10+11}/>
      <Hello name={nimi} age={ika}/>
      <Hello name="Anni" age={33}/>
      <Footer />
    </>
  )
}

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by 
      <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

export default App