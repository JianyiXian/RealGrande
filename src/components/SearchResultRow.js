import { useNavigate } from "react-router-dom";

const SearchResultRow = (props) => {

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`/searchHouseDetail/${props.house._id}`)
    }

    return (
        <tr key={props.house._id} onClick={clickHandler}>
            <td scope="row">{props.house.address}</td>
            <td>${props.house.price}</td>
        </tr>);
}

export default SearchResultRow;