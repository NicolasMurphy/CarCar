import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicians">Technicians List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicians/new">Create a Technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments">Appointments List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments/new">Create an Appointment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments/history">Appointments History</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople">Sales Person List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople/new">Sales Person Form</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers">Customer List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers/new">Customer Form</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales">Sales List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/new">Sales Form</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/history">Sales History</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
