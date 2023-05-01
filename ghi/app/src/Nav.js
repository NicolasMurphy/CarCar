import { NavLink } from 'react-router-dom';

function Nav() {
  return (
      <nav className="bg-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <NavLink className="text-white font-bold text-xl" to="/">CarCar</NavLink>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
              <div className="relative">
                <button className="bg-green-500 text-black font-semibold py-2 px-4 rounded inline-flex items-center nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="px-2">Inventory</span>
                </button>
                <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/manufacturers">
                        <span className="ml-4 text-base font-medium text-gray-900">Manufacturers</span>
                      </NavLink>
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/manufacturers/new">
                        <span className="ml-4 text-base font-medium text-gray-900">Add a Manufacturer</span>
                      </NavLink>
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/models">
                        <span className="ml-4 text-base font-medium text-gray-900">Models</span>
                      </NavLink>
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/models/new">
                        <span className="ml-4 text-base font-medium text-gray-900">Add a Model</span>
                      </NavLink>
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/automobiles">
                        <span className="ml-4 text-base font-medium text-gray-900">Automobiles</span>
                      </NavLink>
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/automobiles/new">
                        <span className="ml-4 text-base font-medium text-gray-900">Add an Automobile</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <button className="bg-green-500 text-black font-semibold py-2 px-4 rounded inline-flex items-center nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="px-2">Service</span>
                </button>
                <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/technicians">
                        <span className="ml-4 text-base font-medium text-gray-900">Technicians List</span>
                      </NavLink>
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/technicians/new">
                        <span className="ml-4 text-base font-medium text-gray-900">Create a Technician</span>
                      </NavLink>
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/appointments">
                        <span className="ml-4 text-base font-medium text-gray-900">Appointments List</span>
                      </NavLink>
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/appointments/new">
                        <span className="ml-4 text-base font-medium text-gray-900">Create an Appointment</span>
                      </NavLink>
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/appointments/history">
                        <span className="ml-4 text-base font-medium text-gray-900">Appointments History</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <button className="bg-green-500 text-black font-semibold py-2 px-4 rounded inline-flex items-center nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="px-2">Sales</span>
                </button>
                <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/salespeople">
                        <span className="ml-4 text-base font-medium text-gray-900">Salespeople</span>
                      </NavLink>
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/salespeople/new">
                        <span className="ml-4 text-base font-medium text-gray-900">Add a Salesperson</span>
                      </NavLink>
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/customers">
                        <span className="ml-4 text-base font-medium text-gray-900">Customers</span>
                      </NavLink>
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/customers/new">
                        <span className="ml-4 text-base font-medium text-gray-900">Add a Customer</span>
                      </NavLink>
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/sales">
                        <span className="ml-4 text-base font-medium text-gray-900">Sales</span>
                      </NavLink>
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/sales/new">
                        <span className="ml-4 text-base font-medium text-gray-900">Add a Sale</span>
                      </NavLink>
                      <NavLink className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/sales/history">
                        <span className="ml-4 text-base font-medium text-gray-900">Salesperson History</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Nav;
