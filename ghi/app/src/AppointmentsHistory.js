import { useState, useEffect} from 'react';

function AppointmentsHistory() {
  const [appointments, setAppointments] = useState([]);

  const getAppointmentData = async () => {
    const resp = await fetch('http://localhost:8080/api/appointments/');
    if (resp.ok) {
      const data = await resp.json();
      setAppointments(data.appointments);
    }
  }

  useEffect(() => {
    getAppointmentData();
  }, [])


    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Vin</th>
            <th>Customer</th>
            <th>Datetime</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => {
            return (
              <tr key={appointment.id}>
                <td>{ appointment.vin }</td>
                <td>{ appointment.customer }</td>
                <td>{ appointment.date_time }</td>
                <td>{ appointment.technician.id }</td>
                <td>{ appointment.reason }</td>
                <td>{ appointment.status }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

export default AppointmentsHistory;
