import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss'
import Pages from '../src/pages';
import { BrowserRouter } from 'react-router-dom';

// https://mui.com/material-ui/material-icons/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </React.StrictMode>
);

