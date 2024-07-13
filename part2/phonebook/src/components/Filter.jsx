const Filter = ({ filter, newFilter }) => {
  return (
    <div>
      filter shown with <input onChange={filter} value={newFilter} />
    </div>
  );
};

export default Filter;
