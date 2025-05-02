// /frontend/unified-dashboard/UnifiedDashboard.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard1 from './Dashboard1';
import Dashboard2 from './Dashboard2';
import MLService from './MLService';

const UnifiedDashboard = () => {
  return (
    <Router>
      <div>
        <h1>Unified Dashboard</h1>
        <nav>
          <ul>
            <li><a href="/backend/dashboard/templates/admin_dashboard/index.html">Dashboard 1</a></li>
            <li><a href="/backend/dashboard/templates/end_user_dashboard/enduserdash.html">Dashboard 2</a></li>
            <li><a href="/backend/dashboard/templates/ai_engineer_dashboard/index.html">ML Service</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard1 />} />
          <Route path="/backend/dashboard/templates/admin_dashboard/index.html" element={<Dashboard1 />} />
          <Route path="/backend/dashboard/templates/end_user_dashboard/enduserdash.html" element={<Dashboard2 />} />
          <Route path="/backend/dashboard/templates/ai_engineer_dashboard/index.html" element={<MLService />} />
        </Routes>
      </div>
    </Router>
  );
};

export default UnifiedDashboard;
