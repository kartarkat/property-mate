import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss'
import MyRoutes from '../src/routes';

// https://mui.com/material-ui/material-icons/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MyRoutes />
  </React.StrictMode>
);

