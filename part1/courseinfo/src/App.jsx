const Header = (props) => {
  console.log("Header props: ", props);
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  );
};

const Part = (props) => {
  console.log("Part props: ", props);
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  console.log("Content props: ", props);
  return (
    <>
        <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
        <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
        <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </>
  );
};

const Total = (props) => {
  console.log("Total props: ", props);
  return (
    <>
      <p>Number of exercises {props.sum[0].exercises + props.sum[1].exercises + props.sum[2].exercises}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
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

  return (
    <div>
      <Header courseName={course} />
      <Content parts={parts}/>
      <Total sum={parts} />
    </div>
  );
};

export default App;
