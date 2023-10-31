import { useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';

const Enquiry = (props) => {
    const [enquiryData, setEnquiryData] = useState({ ename: sessionStorage.getItem('cusName'), email: sessionStorage.getItem('custEmail'), remarks: '', house: props.house });
    const [successMsg, setSuccessMsg] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);

    const formHandler = e => {
        e.preventDefault();
        setEnquiryData({ ...enquiryData, [e.target.name]: e.target.value });
    }

    const clickHandler = async e => {
        e.preventDefault();
        try {
            const resp = await axios.post(process.env.REACT_APP_BACKEND_URL + 'register', { ...enquiryData });
            const data = resp.data;
            setSuccessMsg('You have successful submit the enquiry.');
            setIsSubmit(true);
        } catch (err) {

        }

        //code to send email
        const templateParams = {
            to_name: 'Kate',
            from_name: enquiryData.ename,
            message: enquiryData.remarks
        };
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });

    }

    if (isSubmit) {
        return <h5 className='text-success'>{successMsg}</h5>
    }

    return (
        <div>
            <h3 className="text-center">Contact us about this house</h3>
            <div className="mb-3">
                <label htmlFor="ename" className="form-label">Name</label>
                <input type="text" name="ename" id="ename" className="form-control" value={sessionStorage.getItem('cusName')} onChange={e => formHandler(e)} />

            </div>
            <div className="mb-3">
                <label htmlFor="enquiry-email" className="form-label">Email</label>
                <input type="text" name="email" id="enquiry-email" className="form-control" value={sessionStorage.getItem('custEmail')} onChange={e => formHandler(e)} />

            </div>
            <div className="mb-3">
                <label htmlFor="remarks" className="form-label">Message</label>
                <textarea className="form-control" name='remarks' id="remarks" rows="3" onChange={e => formHandler(e)}></textarea>

            </div>
            <button className='btn btn-light' tpye='submit' onClick={e => clickHandler(e)}>Submit</button>
        </div>
    )
}

export default Enquiry;