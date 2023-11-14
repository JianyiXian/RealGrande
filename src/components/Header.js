import { Link, useNavigate } from "react-router-dom";
import './Header.css'


const Header = () => {
    const navigate = useNavigate();

    const logoutHandler = e => {
        e.preventDefault();
        sessionStorage.clear();
        navigate('/');

    }

    return (
        <div className="container-fluid">
            <div className="row bg-info d-flex align-items-center">
                <div className="col-sm-3">
                    <Link to='/'>
                        <img className="logo p-1" src="/img/logo.jpg" alt="logo" />
                    </Link>

                </div>
                <div className="col-sm-5">
                    <h1 className="tagline text-light"> Welcome!!! Your real estate destination!</h1>
                </div>
                <div className="col-sm-4 text-end">
                    {sessionStorage.getItem('cusName') ? <>
                        <p className="d-inline text-white">Welcome</p> {sessionStorage.getItem('role') === 'realtor' ? <Link className='d-inline text-white' to='/enquries'>{sessionStorage.getItem('cusName')}!</Link> : <p className="d-inline text-white">{sessionStorage.getItem('cusName')}!</p>}
                        < Link to='/logout'>
                            <button className="btn btn-light mx-3" onClick={e => logoutHandler(e)}> Log out </button>
                        </Link></> : <>
                        <Link to='/login'>
                            <button className="btn btn-light mx-3 login"> Log in </button>
                        </Link>
                        <Link to='/signup'>
                            <button className="btn btn-light signup"> Sign up </button>
                        </Link>
                    </>}


                </div>
                {/* <h1 className="bg-warning"> Header!</h1>  */}
            </div>
        </div >);


}
export default Header;
