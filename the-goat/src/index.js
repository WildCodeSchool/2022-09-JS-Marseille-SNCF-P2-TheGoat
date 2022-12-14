
import PageTeam from './PageTeam';
import './PageTeam.css';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <PageTeam /> 
  </StrictMode>
);




