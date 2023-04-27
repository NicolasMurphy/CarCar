import { useEffect, useState } from "react";

function SalespeopleList() {
    const [salespeople, setSalespeople] = useState([])

    const getData = async () => {
        const response = await fetch('http://localhost:8090/api/salespeople/')

        if (response.ok) {
            const data = await response.json()
            setSalespeople(data.salespeople)
        }
    }

    const handleDeleteButton = async (event) => {
        const { id } = event.target;
        const response = await fetch (`http://localhost:8090/api/salespeople/${id}`, {
            method: 'delete'
        })

        if (response.ok) {
            const data = await response.json();
            setSalespeople(salespeople.filter(l => (l.id !== parseInt(id))));
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <>
        <br></br>
        <h1>Salespeople</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Employee ID</th>
                </tr>
            </thead>
            <tbody>
                {salespeople.map(salesperson => {
                    return (
                        <tr key={salesperson.id}>
                            <td>{ salesperson.id }</td>
                            <td>{ salesperson.first_name }</td>
                            <td>{ salesperson.last_name }</td>
                            <td>{ salesperson.employee_id }</td>
                            <td><button className="btn btn-danger" id={salesperson.id} onClick={handleDeleteButton}>Delete</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    );
}

export default SalespeopleList;
