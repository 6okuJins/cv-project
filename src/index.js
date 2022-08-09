import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import App from './App';
import './styles';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <title>Make CV</title>
      <link rel="icon" href="./assets/favicon.ico" />
    </Helmet>
    <App />
  </React.StrictMode>
)