import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [formObj, setFormObj] = useState({ email: '', password: '' })
    const [message, setMessage] = useState();

    const navigate = useNavigate();

    const fomrHandler = (e) => {
        setFormObj({ ...formObj, [e.target.name]: e.target.value });

    }

    const clickHandler = async (e) => {
        e.preventDefault();

        try {
            // send the post request to the backend
            const resp = await axios.post(process.env.REACT_APP_BACKEND_URL + 'login', { ...formObj });
            const userData = resp.data;

            if (userData === 'Authentication Failed') {
                setMessage('Invalid email or password!')
            } else {
                sessionStorage.setItem('cusName', userData.name);
                sessionStorage.setItem('custEmail', userData.email);
                sessionStorage.setItem('role', userData.role);
                if (userData.role === 'customer') {
                    navigate('/');
                } else if (userData.role === 'realtor') {
                    navigate('/enquries')
                }

            }

        } catch (err) {
            console.log(err)
        }


    }
    return (
        <div className="d-flex justify-content-center">
            <form className="w-25">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" name="email" id="email" className="form-control" onChange={e => fomrHandler(e)} />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" id="password" className="form-control" onChange={e => fomrHandler(e)} />

                </div>
                <p className="text-danger">{message}</p>
                <button className='btn btn-light' type='submit' onClick={e => clickHandler(e)}>Login</button>
            </form>

        </div>);
}

export default Login;
