const Course = (props) => {
    const { course } = props

    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}
const Header = ({ name }) => (
    <h1>{name}</h1>
)
const Content = ({ parts }) => {
    return (
        parts.map(part =>
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        )
    )

}
const Part = ({  name, exercises }) => {
    return (
        <p>
            {name} {exercises}
        </p>

    )
}
const Total = ({ parts }) => {
    const total = parts.map(parts => parts.exercises).reduce((a, b) => a + b)

    return (
        <p><b>total of {total} exercises</b></p>
    )

}


export default Course;