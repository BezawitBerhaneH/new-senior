// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import ProcurementOfficer from './components/procurementOfficer/ProcurementOfficer';
import QualityInspectorLayout from './components/QualityControlInspector/QualityControlInspectorLayout';
import WarehouseLayout from './components/warehouse/WarehouseLayout';
import Login from './components/login'; // Import the Login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Add the Login route */}
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/procurement-officer/*" element={<ProcurementOfficer />} />
        <Route path="/quality-inspector/*" element={<QualityInspectorLayout />} />
        <Route path="/warehouse/*" element={<WarehouseLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
