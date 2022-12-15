import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Team from './routes/Team';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Team />
  </React.StrictMode>
);


reportWebVitals();
