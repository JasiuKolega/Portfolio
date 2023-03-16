import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='*' element={<App />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </ChakraProvider>
);