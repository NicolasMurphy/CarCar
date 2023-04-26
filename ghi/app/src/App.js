import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './Service/Technicians/TechnicianForm';
import TechniciansList from './Service/Technicians/TechniciansList';
import AppointmentForm from './Service/Appointments/AppointmentForm';
import AppointmentsList from './Service/Appointments/AppointmentsList';
import AppointmentHistory from './Service/Appointments/AppointmentsHistory';
import SalespeopleList from './Sale/SalesStaff/SalepeopleList';
import SalespeopleForm from './Sale/SalesStaff/SalespeopleForm';
import CustomerList from './Sale/Customers/CustomerList';
import CustomerForm from './Sale/Customers/CustomerForm';
import SaleList from './Sale/Sales/SaleList';
import SaleForm from './Sale/Sales/SaleForm';
import SaleHistory from './Sale/Sales/SalesHistory';
import ManufacturerList from './Inventory/Manufacturers/ManufacturerList';
import ManufacturerForm from './Inventory/Manufacturers/ManufacturerForm';
import AutomobileForm from './Inventory/Automobiles/AutomobileForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
              <Route path="new" element={<ManufacturerForm />} ></Route>
              <Route path="" element={<ManufacturerList />} ></Route>
          </Route>
          {/*<Route path="models">
              <Route path="new" element={<ModelForm />} ></Route>
              <Route path="" element={<ModelList />} ></Route>
            </Route> */}
          <Route path="automobiles">
              <Route path="new" element={<AutomobileForm />} ></Route>
              {/*<Route path="" element={<AutomobileList />} ></Route> */}
          </Route>
          <Route path="technicians">
              <Route path="new" element={<TechnicianForm />} ></Route>
              <Route path="" element={<TechniciansList />} ></Route>
          </Route>
          <Route path="appointments">
              <Route path="new" element={<AppointmentForm />} ></Route>
              <Route path="" element={<AppointmentsList />} ></Route>
              <Route path="history" element={<AppointmentHistory />} ></Route>
          </Route>
          <Route path="salespeople">
            <Route path="" element={<SalespeopleList />} />
            <Route path="new" element={<SalespeopleForm />} />
          </Route>
          <Route path="customers">
            <Route path="" element={<CustomerList />} />
            <Route path="new" element={<CustomerForm />} />
          </Route>
          <Route path="sales">
            <Route path="" element={<SaleList />} />
            <Route path="new" element={<SaleForm />} />
            <Route path="history" element={<SaleHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
