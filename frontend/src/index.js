import React from 'react';
import { createRoot } from 'react-dom/client';

// React Router DOM Imports
import {BrowserRouter} from 'react-router-dom';


// User Imports
import "./assets/css/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

// PAGES
import About from "./pages/About";
import App from "./pages/App";
import Contact from "./pages/Contact";
import FAQ from "./pages/Faq";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import SignUp from "./pages/SignUp";
import BrowseParkingLot from './pages/BrowseParkingLots';
import Dashboard from './pages/TempDashboard';
import Billing from './pages/Billing';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


export const Pages = {
  About,
  Contact,
  FAQ,
  Home,
  Login,
  Pricing,
  SignUp,
  BrowseParkingLot,
  Dashboard,
  Billing
}
