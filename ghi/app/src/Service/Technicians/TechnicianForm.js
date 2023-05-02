import React, { useState } from 'react';

function TechniciansForm() {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [employee_id, setEmployeeId] = useState('');

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

        const data = {};
        data.first_name = first_name;
        data.last_name = last_name;
        data.employee_id = employee_id;

        const technicianUrl = 'http://localhost:8080/api/technicians/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
            const newTechnician = await response.json();
            console.log(newTechnician);

            setFirstName('');
            setLastName('');
            setEmployeeId('');
        }
    };



    return (
        // <div className="row">
        // <div className="offset-3 col-6">
        //   <div className="shadow p-4 mt-4">
        //     <h1>Add a Technician</h1>
        //     <form onSubmit={handleSubmit} id="create-technician-form">

        //         <div className="form-floating mb-3">
        //             <input value={first_name} onChange={handleFirstNameChange} placeholder="First name" required type="text" name="first_name" id="first_name" className="form-control"></input>
        //             <label htmlFor="first_name">First name</label>
        //         </div>
        //         <div className="form-floating mb-3">
        //             <input value={last_name} onChange={handleLastNameChange} placeholder="Last name" required type="text" name="last_name" id="last_name" className="form-control"></input>
        //             <label htmlFor="last_name">Last name</label>
        //         </div>
        //         <div className="form-floating mb-3">
        //             <input value={employee_id} onChange={handleEmployeeIdChange} placeholder="Employee id" required type="number" name="employee_id" id="employee_id" className="form-control"></input>
        //             <label htmlFor="employee_id">Employee id</label>
        //         </div>

        //       <button className="btn btn-primary">Create</button>
        //     </form>
        //   </div>
        // </div>
        // </div>

        <div className="h-screen">
        <div className="flex flex-col items-center">
        <br></br>
        <h2 className="text-4xl font-bold text-white">Add a Technician</h2>
        <br></br>
            <form onSubmit={handleSubmit} className="flex flex-col flex-center bg-gray-800 rounded shadow-lg p-8" action="">
                <input value={first_name} onChange={handleFirstNameChange} className="mb-2 text-white flex items-center h-12 px-4 w-64 bg-gray-600 mt-2 rounded focus:outline-none focus:ring-2" type="text" placeholder="First name" required/>
                <input value={last_name} onChange={handleLastNameChange} className="mb-2 text-white flex items-center h-12 px-4 w-64 bg-gray-600 mt-2 rounded focus:outline-none focus:ring-2" type="text" placeholder="Last name" required/>
                <input value={employee_id} onChange={handleEmployeeIdChange} className="mb-2 text-white flex items-center h-12 px-4 w-64 bg-gray-600 mt-2 rounded focus:outline-none focus:ring-2" type="text" placeholder="Employee id" required/>
                <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Create</button>
            </form>
        </div>
    </div>

    );
  }

  export default TechniciansForm;
