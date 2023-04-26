import { useState, useEffect} from 'react';

function AppointmentsList() {

  function formatTime(timeString) {
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
  }

  const [appointments, setAppointments] = useState([]);
  const [autos, setAutos] = useState([]);

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

  const handleCancel = async (event) => {
    event.preventDefault();

    const cancelUrl = `http://localhost:8080/api/appointments/${event.target.id}/cancel/`;
    const fetchConfig = {
        method: "put",
    };

    const response = await fetch(cancelUrl, fetchConfig);
    if (response.ok) {
        alert("successfully cancelled")
    }
  };

  const handleFinish = async (event) => {
    event.preventDefault();

    const finishUrl = `http://localhost:8080/api/appointments/${event.target.id}/finish/`;
    const fetchConfig = {
        method: "put",
    };

    const response = await fetch(finishUrl, fetchConfig);
    if (response.ok) {
        alert("successfully finished")
    }
  };


  useEffect(() => {
    getAppointmentData();
    getAutoData();
  }, [])

    return (
      <>
      <br></br>
      <h1>Appointments</h1>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => {
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
                <td>
                  <button className="btn btn-danger" onClick={handleCancel} id={appointment.id}>Cancel</button>
                  <button className="btn btn-success" onClick={handleFinish} id={appointment.id}>Finish</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
    );
  }
export default AppointmentsList;
