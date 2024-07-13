const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.add}>
        <div>
          name: <input onChange={props.handleName} value={props.newName} />
        </div>
        <div>
          number:{" "}
          <input onChange={props.handleNumber} value={props.newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
