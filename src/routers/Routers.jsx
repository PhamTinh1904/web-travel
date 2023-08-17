import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetail from '../pages/TourDetail'
import SearchResult from '../pages/SearchResult'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ThankYou from '../pages/ThankYou'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tour/:id' element={<TourDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tours/search' element={<SearchResult/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
    </Routes>
  )
}

export default Routers