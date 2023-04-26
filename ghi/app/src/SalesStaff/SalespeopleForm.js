import React, { useEffect, useState } from 'react';

function SalespeopleForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [employeeId, setEmployeeId] = useState('');

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
    }

    const handleEmployeeIdChange = (event) => {
        const value = event.target.value;
        setEmployeeId(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data= {};

        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_id = employeeId;

        const salesrepUrl = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(salesrepUrl, fetchConfig);
        if (response.ok) {
            const newSalesperson = await response.json();

            setFirstName('');
            setLastName('');
            setEmployeeId('');
        }
    }

    return(
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create Sales Rep</h1>
            <form onSubmit={handleSubmit} id="create-salespeople-form">
                <div className="form-floating mb-3">
                    <input value={firstName} onChange={handleFirstNameChange} placeholder="First Name" required type="text" name="firstName" id="firstName" className="form-control"/>
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={lastName} onChange={handleLastNameChange} placeholder="Last Name" required type="text" name="lastName" id="lastName" className="form-control"/>
                    <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={employeeId} onChange={handleEmployeeIdChange} placeholder="Employee Id" required type="text" name="employeeId" id="employeeId" className="form-control"/>
                    <label htmlFor="employeeId">Employee ID</label>
                </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
        </div>
    )

}

export default SalespeopleForm;
