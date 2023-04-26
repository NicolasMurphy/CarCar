import { useState, useEffect} from 'react';

function CustomerList() {
    const [customers, setCustomers] = useState([])

    const getData = async () => {
        const response = await fetch('http://localhost:8090/api/customers/')

        if (response.ok) {
            const data = await response.json()
            setCustomers(data.customers)
        }
    }

    const handleDeleteButton = async (event) => {
        const { id } = event.target;
        const response = await fetch (`http://localhost:8090/api/customers/${id}`, {
            method: 'delete'
        })

        if (response.ok) {
            const data = await response.json();
            setCustomers(customers.filter(l => (l.id !== parseInt(id))));
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {customers.map(customers => {
                    return(
                        <tr key={customers.id}>
                            <td>{ customers.id }</td>
                            <td>{ customers.first_name }</td>
                            <td>{ customers.last_name }</td>
                            <td>{ customers.address }</td>
                            <td>{ customers.phone_number }</td>
                            <td><button className="btn btn-danger" id={customers.id} onClick={handleDeleteButton}>Delete</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
  }

export default CustomerList;
