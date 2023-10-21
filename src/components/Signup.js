import { useState } from "react";
import axios from 'axios';

const Signup = () => {

    const [formObj, setFormObj] = useState({ name: '', email: '', password: '' });
    const [isSignup, setIsSignup] = useState(false);
    const [errMessage, setErrMessage] = useState();

    const fomrHandler = (e) => {
        setFormObj({ ...formObj, [e.target.name]: e.target.value });
    }

    const clickHandler = async (e) => {
        e.preventDefault();
        console.log(formObj);

        try {
            const resp = await axios.post('http://localhost:3002/signup', { ...formObj });
            const userData = resp.data;
            console.log(userData);

            if (userData) {
                setIsSignup(true)
                setErrMessage('')
            }

        } catch (err) {
            console.log(err)
            setErrMessage('Duplicate User')
        }
    }

    return (
        < div className="d-flex justify-content-center" >
            {!isSignup && <form className="w-25">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Username</label>
                    <input type="text" name="name" id="name" className="form-control" onChange={e => fomrHandler(e)} />

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" id="email" className="form-control" onChange={e => fomrHandler(e)} />

                </div>
                <p className="text-danger">{errMessage}</p>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" id="password" className="form-control" onChange={e => fomrHandler(e)} />

                </div>
                <button className='btn btn-light' type='submit' onClick={e => clickHandler(e)}>Sign up</button>
            </form>}

            {isSignup && <h5>Hello, {formObj.name}! You are now a member of RealGrande.</h5>}

        </div >
    );
}

export default Signup;