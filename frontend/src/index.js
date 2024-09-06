import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import './loginpage/loginpage.css';
import Loginpage1 from "./loginpage/loginpage1.js";
 import Loginpage2 from "./loginpage/loginpage2.js";
import App3 from './App3'; 
import App2 from './Clickcard/App2';
import "react-alice-carousel/lib/alice-carousel.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App3 />} />
      <Route path="/game" element={<App2 />} />
      <Route path="/signup" element={<Loginpage1/>} />
      <Route path="/login" element={<Loginpage2 />} />
  </Routes>
</BrowserRouter>
);


