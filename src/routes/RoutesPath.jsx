import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Wishlist from '../pages/Wishlist';


export const RoutesPath = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Navigate to ='/' />} />
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/wishlist' element={<Wishlist />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

