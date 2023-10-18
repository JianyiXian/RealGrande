import { useState } from "react";

const Login = () => {
    const [formObj, setFormObj] = useState({ username: '', password: '' })

    const fomrHandler = (e) => {
        setFormObj({ ...formObj, [e.target.name]: e.target.value });

    }

    const clickHandler = (e) => {
        e.preventDefault();
        console.log(formObj)

    }
    return (
        <div className="d-flex justify-content-center">
            <form className="w-25">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" name="username" id="username" className="form-control" onChange={e => fomrHandler(e)} />

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
