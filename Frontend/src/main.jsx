import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

// Set the base URL for API requests
axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL || 'http://localhost:3000';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);