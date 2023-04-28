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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" aria-labelledby="navbarDropdown">
              <li className="nav-item dropdown mr-2">
                <button className="bg-green-500 text-black font-semibold py-2 px-4 rounded inline-flex items-center nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <NavLink className="block px-4 py-2 text-black" to="#">Inventory</NavLink>
                </button>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <NavLink className="nav-link text-black" to="/manufacturers">Manufacturers</NavLink>
                    <NavLink className="nav-link text-black" to="/manufacturers/new">Add a Manufacturer</NavLink>
                    <NavLink className="nav-link text-black" to="/models">Models</NavLink>
                    <NavLink className="nav-link text-black" to="/models/new">Add a Model</NavLink>
                    <NavLink className="nav-link text-black" to="/automobiles">Automobiles</NavLink>
                    <NavLink className="nav-link text-black" to="/automobiles/new">Add an Automobile</NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown mr-2">
                <button className="bg-green-500 text-black font-semibold py-2 px-4 rounded inline-flex items-center nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <NavLink className="block px-4 py-2 text-black" to="#">Service</NavLink>
                </button>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <NavLink className="nav-link text-black" to="/technicians">Technicians List</NavLink>
                    <NavLink className="nav-link text-black" to="/technicians/new">Create a Technician</NavLink>
                    <NavLink className="nav-link text-black" to="/appointments">Appointments List</NavLink>
                    <NavLink className="nav-link text-black" to="/appointments/new">Create an Appointment</NavLink>
                    <NavLink className="nav-link text-black" to="/appointments/history">Appointments History</NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown mr-2">
                <button className="bg-green-500 text-black font-semibold py-2 px-4 rounded inline-flex items-center nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <NavLink className="block px-4 py-2 text-black" to="#">Sales</NavLink>
                </button>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <NavLink className="nav-link text-black" to="/salespeople">Salespeople</NavLink>
                    <NavLink className="nav-link text-black" to="/salespeople/new">Add a Salesperson</NavLink>
                    <NavLink className="nav-link text-black" to="/customers">Customers</NavLink>
                    <NavLink className="nav-link text-black" to="/customers/new">Add a Customer</NavLink>
                    <NavLink className="nav-link text-black" to="/sales">Sales</NavLink>
                    <NavLink className="nav-link text-black" to="/sales/new">Add a Sale</NavLink>
                    <NavLink className="nav-link text-black" to="/sales/history">Salesperson History</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Nav;
