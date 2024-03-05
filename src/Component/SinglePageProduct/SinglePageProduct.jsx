import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import './SinglePageProduct.css';

const SinglePageProduct = () => {
    
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        payment: '',

    });

    const navigate = useNavigate();
    const { state } = useLocation();
    const event = state?.event;

    //   console.log('Selected Event:', event);

    useEffect(() => {
        // Set initial values from the selected event when component mounts
        if (event) {
            setFormData({
                fullName: '',
                email: '',
                phoneNumber: '',
                payment: event.price || '', // Set payment field with event price
            });
        }
    }, [event]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        //logic to handle form submission, e.g., sending data to a server
        console.log('Form submitted:', formData, 'Event details:', event);
    };


    const handleBackClick = () => {
        // Navigate back to the previous page
        navigate(-1);
    };


  return (
    <div className="container-registration">
    <div className="event-details">
        {event && (
            <div>
                <img src={event.image} alt="" />
                <p>Location: {event.location}</p>
                <p>Title: {event.title}</p>
                <p>Price: {event.price}</p>
            </div>
        )}
    </div>

    <div className="registration-form">
        <h2>Registration Form</h2>

        <form onSubmit={handleFormSubmit}>
            <label htmlFor="fullName">Full Name:</label>
            <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
            />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
            />
            <label htmlFor="payment">Payment:</label>
            <input
                type="text"
                id="payment"
                name="payment"
                value={formData.payment}
                onChange={handleInputChange}
                required
            />

            <button type="submit">Submit</button>
        </form>
        <button onClick={handleBackClick} className="back">
            Back
        </button>
    </div>
</div>
  )
}

export default SinglePageProduct