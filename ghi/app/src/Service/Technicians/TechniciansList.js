import { useState, useEffect} from 'react';

function TechniciansList() {
  const [technicians, setTechnicians] = useState([]);

  const getData = async () => {
    const resp = await fetch('http://localhost:8080/api/technicians/');
    if (resp.ok) {
      const data = await resp.json();
      setTechnicians(data.technicians);
    }
  }

  useEffect(() => {
    getData();
  }, [])

    return (
      <>
      <br></br>
      <h1>Technicians</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Employee id</th>
          </tr>
        </thead>
        <tbody>
          {technicians.map(technician => {
            return (
              <tr key={technician.employee_id}>
                <td>{ technician.first_name }</td>
                <td>{ technician.last_name }</td>
                <td>{ technician.employee_id }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
    );
  }

  export default TechniciansList;
