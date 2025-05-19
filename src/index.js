import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Productpage from './Productpage';
import Login from './Login';
import Signup from './Signup';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/product" element={<Productpage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

      </Routes>
    </BrowserRouter>
  </>
);

