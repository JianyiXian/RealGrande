import Enquiry from "./Enquiry";

const HouseDetail = (props) => {

    const currentURL = window.location.href

    return (
        <div className='container'>
            <div className='row pb-2'>
                <div className='col-md-6'>
                    <img className='img-fluid' src={`/img/${props.houseInfo.photo}`} alt='img' />
                </div>
                <div className='col-md-6'>
                    <p>{props.houseInfo.description}</p>
                    {sessionStorage.getItem('cusName') && sessionStorage.getItem('role') === 'customer' && currentURL !== 'http://localhost:3000/' && < Enquiry house={props.houseInfo._id} />}
                </div>

            </div>
            <div className='row pb-2'>
                <div className='col-md-6'>
                    Address: {props.houseInfo.address}, {props.houseInfo.county}
                </div>
                <div className='col-md-6'>
                    Price: ${props.houseInfo.price}
                </div>
            </div>
        </div>
    );
}

export default HouseDetail;