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

export default Course