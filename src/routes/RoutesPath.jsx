import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import Navbar from '../components/navbar/Navbar';


export const RoutesPath = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/*' element={<Navigate to ='/' />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
