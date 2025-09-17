import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>   
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
