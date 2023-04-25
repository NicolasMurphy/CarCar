import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import TechniciansList from './TechniciansList';
import AppointmentForm from './AppointmentForm';
import AppointmentsList from './AppointmentsList';
import AppointmentHistory from './AppointmentsHistory';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
