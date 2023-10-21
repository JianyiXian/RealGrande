import { useState } from 'react';
import axios from 'axios';

const Enquiry = () => {
    let [enquiryObj, setEnquiryObj] = useState({ ename: '', email: '', remarks: '' });

    const formHandler = e => {
        e.preventDefault();
        setEnquiryObj({ ...enquiryObj, [e.target.name]: e.target.value });
    }

    const clickHandler = async e => {
        e.preventDefault();
        console.log('eObj', enquiryObj);
        const resp = await axios.post('http://localhost:3002/register', { ...enquiryObj });

        const data = resp.data;
        console.log(data);
    }

    return (
        <div>
            <h3 className="text-center">Contact us about this house</h3>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" name="ename" id="" className="form-control" placeholder="" onChange={e => formHandler(e)} />

            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Email</label>
                <input type="text" name="email" id="" className="form-control" placeholder="" onChange={e => formHandler(e)} />

            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Message</label>
                <textarea className="form-control" name='remarks' id="remarks" rows="3" onChange={e => formHandler(e)}></textarea>

            </div>
            <button className='btn btn-light' tpye='submit' onClick={e => clickHandler(e)}>Submit</button>
        </div>
    )
}

export default Enquiry;