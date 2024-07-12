import Part from "./Part";

const Course = ({ course }) => {
  const sum = course.parts.reduce((a, b) => ({
    exercises: a.exercises + b.exercises,
  }));
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>
        <b>total of {sum.exercises} exercises</b>
      </p>
    </div>
  );
};

export default Course;
