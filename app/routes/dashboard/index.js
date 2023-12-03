// src/routes/dashboard/index.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
