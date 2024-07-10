const Header = (props) => {
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.partFirst} exercises={props.exercisesFirst} />
      <Part part={props.partSecond} exercises={props.exercisesSecond} />
      <Part part={props.partThird} exercises={props.exercisesThird} />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.sum}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header courseName={course} />
      <Content
        partFirst={part1}
        exercisesFirst={exercises1}
        partSecond={part2}
        exercisesSecond={exercises2}
        partThird={part3}
        exercisesThird={exercises3}
      />

      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
