import React from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/reports' element= {<Reports />} />
          <Route path='/products' element= {<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;