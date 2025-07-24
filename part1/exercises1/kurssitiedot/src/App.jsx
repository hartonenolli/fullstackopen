const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content 
        parts={[part1.name, part2.name, part3.name]}
        exercises={[part1.exercises, part2.exercises, part3.exercises]} 
      />
      <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

const Header = ({ course }) => <h1>{course}</h1>
//const Content = ({ parts, exercises }) => <p>{parts} {exercises}</p>
const Content = ({ parts, exercises }) => (
  <div>
    <Part part={parts[0]} exercises={exercises[0]} />
    <Part part={parts[1]} exercises={exercises[1]} />
    <Part part={parts[2]} exercises={exercises[2]} />
  </div>
)
const Total = ({ exercises }) => <p>Number of exercises {exercises}</p>

const Part = ({ part, exercises }) => (
  <p>{part} {exercises}</p>
)

export default App