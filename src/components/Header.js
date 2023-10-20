import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-info d-flex align-items-center">
                <div className="col-sm-3">
                    <Link to='/'>
                        <img className="logo p-1" src="/img/logo.jpg" alt="logo" />
                    </Link>

                </div>
                <div className="col-sm-5">
                    <h1 className="tagline text-light"> Your real estate destination!</h1>
                </div>
                <div className="col-sm-4 text-end">
                    <Link to='/login'>
                        <button className="btn btn-light mx-3 login"> Log in </button>
                    </Link>
                    <Link to='/signup'>
                        <button className="btn btn-light signup"> Sign up </button>
                    </Link>

                </div>
                {/* <h1 className="bg-warning"> Header!</h1>  */}
            </div>
        </div>);


}
export default Header;
