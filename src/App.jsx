import React from 'react';
import Menu from './Components/Menu';
import styles from './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/app.routes';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';


import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Router>
      <Menu />
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
}
