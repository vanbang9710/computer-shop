import React from 'react';
import ReactDOM from 'react-dom/client';

import { theme } from './theme';
import { ThemeProvider } from '@mui/material';

import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
