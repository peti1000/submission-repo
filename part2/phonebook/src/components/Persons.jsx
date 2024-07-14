import Person from "./Person";

const Persons = ({ filtered, removePerson }) => {


    return (
        <div>
            {filtered.map((person) => (
                <Person key={person.name} person={person} removePerson={removePerson}/>
            ))}
        </div>
    );
};

export default Persons;
