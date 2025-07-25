const CountryForm = ({handleFilterChange}) => {
    return (
        <>
            <form>
                find countries <input onChange={handleFilterChange}/>
            </form>
        </>
    )
}

export default CountryForm