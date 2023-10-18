import { useNavigate } from 'react-router-dom'

const SearchFilter = (props) => {
    const navigate = useNavigate();


    // Get the counties array from the houses 
    const counties = props.houses.map((house) => house.county);

    const distinCounties = Array.from(new Set([...counties]))


    const changeHandler = (e) => {

        // Navigate to the searchresults
        navigate(`/searchresults/${e.target.value}`)
    }


    return (
        <div className="text-center p-3">
            <b className="mx-3"> Select county</b>
            <select onChange={e => changeHandler(e)}>
                <option key='select' value='select'> Select </option>
                {distinCounties.map(county => (<option key={county} value={county}>{county}</option>))}
            </select>

        </div>
    );
}

export default SearchFilter;