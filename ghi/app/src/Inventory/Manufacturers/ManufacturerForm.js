import { useState } from 'react';

function ManufacturerForm () {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data= {};

        data.name = name;

        const manufacturersUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(manufacturersUrl, fetchConfig);
        if (response.ok) {
            const newManufacturer = await response.json();

            setName('');
        }
    }

    return(
<div className="h-screen">
    <div className="flex flex-col items-center">
    <br></br>
    <h2 className="text-4xl font-bold text-white">Add a Manufacturer</h2>
    <br></br>
        <form onSubmit={handleSubmit} className="flex flex-col flex-center bg-gray-800 rounded shadow-lg p-8" action="">
            <input value={name} onChange={handleNameChange} className="text-white flex items-center h-12 px-4 w-64 bg-gray-600 mt-2 rounded focus:outline-none focus:ring-2" type="text" placeholder="Manufacturer Name" required/>
            <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Create</button>
        </form>
    </div>
</div>
    )
}

export default ManufacturerForm;
