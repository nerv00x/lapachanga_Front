import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MiNavbar from './Componentes/navbar';
import ApuestasPage from './Pages/apuestas';
import DirectoPage from './Pages/directo';
import SalasPage from './Pages/salas';
import LoginPage from './Pages/login'

const App = () => {
  return (
    <Router>
      <div>
        <MiNavbar />
        <Routes>
          <Route path="/directo" element={<DirectoPage />} />
          <Route path="/salas" element={<SalasPage />} />
          <Route path="/apuestas" element={<ApuestasPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
