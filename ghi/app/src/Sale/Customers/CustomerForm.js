import { useState } from 'react';

function CustomerForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
    }

    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    }

    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data= {};

        data.first_name = firstName;
        data.last_name = lastName;
        data.address = address;
        data.phone_number = phoneNumber;

        const customersUrl = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(customersUrl, fetchConfig);
        if (response.ok) {
            const newCustomer = await response.json();

            setFirstName('');
            setLastName('');
            setAddress('');
            setPhoneNumber('');
        }
    }

    return(
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create Customer</h1>
            <form onSubmit={handleSubmit} id="create-customer-form">
                <div className="form-floating mb-3">
                    <input value={firstName} onChange={handleFirstNameChange} placeholder="First Name" required type="text" name="firstName" id="firstName" className="form-control"/>
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={lastName} onChange={handleLastNameChange} placeholder="Last Name" required type="text" name="lastName" id="lastName" className="form-control"/>
                    <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={address} onChange={handleAddressChange} placeholder="Address" required type="text" name="address" id="address" className="form-control"/>
                    <label htmlFor="address">Address</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={phoneNumber} onChange={handlePhoneNumberChange} placeholder="Phone Number" required type="text" name="phoneNumber" id="phoneNumber" className="form-control"/>
                    <label htmlFor="phoneNumber">Phone Number</label>
                </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
        </div>
    )

  }

export default CustomerForm;