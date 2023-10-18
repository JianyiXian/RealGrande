import { useParams } from "react-router-dom";
import HouseDetail from "./HouseDetail";

const SearchHouseDetail = (props) => {
    console.log(props.houses)

    // Get access to the user ID that's encoded in the URL
    const houseParam = useParams();

    // Get the houseArray with the specify id
    const searchedHouse = props.houses.find(house => house._id == houseParam.id);
    console.log(searchedHouse);
    return (

        <HouseDetail houseInfo={searchedHouse} />

    );
}

export default SearchHouseDetail;