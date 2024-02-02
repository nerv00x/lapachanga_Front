// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MiNavbar from "./Componentes/navbar";
import ApuestasPage from "./Pages/apuestas";
import DirectoPage from "./Pages/directo";
import SalasPage from "./Pages/salas";
import LoginPage from "./Pages/login";
import Sidebar from "./Componentes/siderbar";

function App() {
  return (
    <div className="App bg-color">
      <>
        <Router>
          <MiNavbar />
          <Sidebar />
          <Rutas />
        </Router>
        <header className="App-header"></header>
      </>
    </div>
  );
}

const Rutas = () => {
  return (
    <Routes>
      <Route path="/directo" element={<DirectoPage />} />
      <Route path="/salas" element={<SalasPage />} />
      <Route path="/apuestas" element={<ApuestasPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
