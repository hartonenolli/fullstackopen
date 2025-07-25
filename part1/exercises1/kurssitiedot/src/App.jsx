const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  console.log('parts', parts);
  console.log('parts[0]', parts[0]);

  return (
    <div>
      <Header course={course} />
      <Content 
        parts={[parts[0].name, parts[1].name, parts[2].name]}
        exercises={[parts[0].exercises, parts[1].exercises, parts[2].exercises]} 
      />
      <Total exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
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