const Search = () => {
    return (
        <form className='input-group p-5 w-75'>
            <input className='form-control' type='text' id='search' placeholder="Enter an address, city, county, or ZIP code"></input>
            <button className='btn btn-light'>Search</button>
        </form>

    );
}

export default Search;