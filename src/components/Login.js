import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [formObj, setFormObj] = useState({ email: '', password: '' })
    const [isLogin, setIsLogin] = useState(false);

    const navigate = useNavigate();

    const fomrHandler = (e) => {
        setFormObj({ ...formObj, [e.target.name]: e.target.value });

    }

    const clickHandler = async (e) => {
        e.preventDefault();
        console.log(formObj)

        try {
            // send the post request to the backend
            const resp = await axios.post('http://localhost:3002/login', { ...formObj });
            const userData = resp.data;
            console.log("user", userData);

            if (userData != 'Authentication Failed') {
                navigate('/');
                setIsLogin(true);
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
                <button className='btn btn-light' type='submit' onClick={e => clickHandler(e)}>Login</button>
            </form>

        </div>);
}

export default Login;
