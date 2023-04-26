import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './Service/Technicians/TechnicianForm';
import TechniciansList from './Service/Technicians/TechniciansList';
import AppointmentForm from './Service/Appointments/AppointmentForm';
import AppointmentsList from './Service/Appointments/AppointmentsList';
import AppointmentHistory from './Service/Appointments/AppointmentsHistory';
import SalespeopleList from './SalesStaff/SalepeopleList';
import SalespeopleForm from './SalesStaff/SalespeopleForm';
import CustomerList from './Customers/CustomerList';
import CustomerForm from './Customers/CustomerForm';
import SaleList from './Sales/SaleList';
import SaleForm from './Sales/SaleForm';
import SaleHistory from './Sales/SalesHistory';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
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
