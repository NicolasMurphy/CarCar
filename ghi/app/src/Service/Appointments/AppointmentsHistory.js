import { useState, useEffect} from 'react';


function AppointmentsHistory() {

  function formatTime(timeString) {
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
  }

  const [appointments, setAppointments] = useState([]);
  const [autos, setAutos] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  }

  const getAppointmentData = async () => {
    const resp = await fetch('http://localhost:8080/api/appointments/');
    if (resp.ok) {
      const data = await resp.json();
      setAppointments(data.appointments);
    }
  }

  const getAutoData = async () => {
    const resp = await fetch('http://localhost:8100/api/automobiles/');
    if (resp.ok) {
      const data = await resp.json();
      setAutos(data.autos);
    }
  }

  useEffect(() => {
    getAppointmentData();
    getAutoData();
  }, [])

    return (
      <>
      <br></br>
      <h1>Appointments History</h1>
      <input class="form-control border-end-0 border rounded-pill" onChange={handleFilterValueChange} value={filterValue} placeholder="Filter Value" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Vin</th>
            <th>Is VIP?</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments
          .filter((appointment) => appointment.vin.toLowerCase().includes(filterValue.toLowerCase()))
          .map(appointment => {
            let str = JSON.stringify(autos)
            return (
              <tr key={appointment.id}>
                <td>{ appointment.vin }</td>
                <td>{ ((str.includes(appointment.vin)) ? "yes" : "no") }</td>
                <td>{ appointment.customer }</td>
                <td>{ appointment.date_time.split("T")[0] }</td>
                <td>{ formatTime(appointment.date_time.split("T")[1].split("+")[0]) }</td>
                <td>{ `${appointment.technician.first_name} ${appointment.technician.last_name}` }</td>
                <td>{ appointment.reason }</td>
                <td>{ appointment.status }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
    );
  }

export default AppointmentsHistory;
