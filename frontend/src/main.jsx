import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import Login from './components/Login';
import './index.css';

// Get the root element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw' }}>
      <Login />
    </div>
  </React.StrictMode>
);