import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EnquiryList = () => {
    const [enquiryData, setEnquiryData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3002/allenquiry');
                console.log(response);
                const data = await response.data;
                setEnquiryData(data);

            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])

    if (!enquiryData) {
        return <p>Loading...</p>
    }


    return (
        <div>
            <h3>Enquiries Received:</h3>
            <div className="table-responsive px-3">
                <table className="table table-light">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">House</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enquiryData.map(data => {
                            return (<tr className="" key={data._id}>
                                <td scope="row" >{data.date.slice(0, 10)}</td>
                                <td ><Link to={`/searchHouseDetail/${data.house}`}>{data.house}</Link></td>
                                <td >{data.ename}</td>
                                <td >{data.email}</td>
                                <td >{data.remarks}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default EnquiryList;