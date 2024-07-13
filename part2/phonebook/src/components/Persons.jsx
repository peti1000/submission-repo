import Person from "./Person";

const Persons = ({ filtered }) => {
  return (
    <div>
      {filtered.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default Persons;
