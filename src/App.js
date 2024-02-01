// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiNavbar from './Componentes/navbar';
import ApuestasPage from './Pages/apuestas';
import DirectoPage from './Pages/directo';
import SalasPage from './Pages/salas';
import LoginPage from './Pages/login';
import Sidebar from './Componentes/siderbar'; 

const App = () => {
  return (
    <Router>
      <div>
        <MiNavbar />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Routes>
                <Route path="/directo" element={<DirectoPage />} />
                <Route path="/salas" element={<SalasPage />} />
                <Route path="/apuestas" element={<ApuestasPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
