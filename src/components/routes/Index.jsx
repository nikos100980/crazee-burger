import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from '../error/ErrorPage'
import LoginPage from "../pages/login/LoginPage"
import OrderPage from '../pages/order/OrderPage'


export default function Index() {

  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route path='/order/:id' element={<OrderPage/> }/>
        <Route path ='*' element={<ErrorPage/>} />
    </Routes>
    
    </BrowserRouter>
  )
}
