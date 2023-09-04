import React from 'react';
import Menu from './Components/Menu';
import style from './global.css';

import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/app.routes';

export default function App() {
  return (
    <Router>
      <Menu />
      <AppRoutes />
    </Router>
  );
}
