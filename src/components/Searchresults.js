import { useParams } from "react-router-dom";
import SearchResultRow from "./SearchResultRow";

const Searchresults = (props) => {

    const countyParam = useParams();

    // Get the houses array which have the selected county 
    const filterHouses = props.houses.filter(house => house.county === countyParam.county);

    return (
        <div>
            {countyParam.county !== 'select' && <h4>Results for houses in {countyParam.county}</h4>}
            <div className="table-responsive">
                <table className="table table-light table-hover">
                    <thead>
                        <tr>
                            <th scope="col">address</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterHouses.map(house => <SearchResultRow house={house} />)}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Searchresults;