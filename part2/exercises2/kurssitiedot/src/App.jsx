const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  )
}

const Course = ({ course }) => {
  console.log('course', course);
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({ parts }) => {
  console.log('parts', parts);
  return (
    <div>
      {parts.map(part => (<Part key={part.id} part={part} />))}
      <Total parts={parts} />
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  console.log('total', total);
  return (
    <p>
      <strong>Total of {total} exercises</strong>
    </p>
  )
}

export default App