import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from "../pages/login/LoginPage"
import Order from '../pages/order/Order'


export default function Index() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/order' element={<Order/> }/>
    </Routes>
    
    </BrowserRouter>
  )
}
