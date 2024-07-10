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
      <Part part={props.partFirst} exercises={props.exercisesFirst} />
      <Part part={props.partSecond} exercises={props.exercisesSecond} />
      <Part part={props.partThird} exercises={props.exercisesThird} />
    </>
  );
};

const Total = (props) => {
  console.log("Total props: ", props);
  return (
    <>
      <p>Number of exercises {props.sum}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header courseName={course} />
      <Content
        partFirst={part1.name}
        exercisesFirst={part1.exercises}
        partSecond={part2.name}
        exercisesSecond={part2.exercises}
        partThird={part3.name}
        exercisesThird={part3.exercises}
      />

      <Total sum={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
