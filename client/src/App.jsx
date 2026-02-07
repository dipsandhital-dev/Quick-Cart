import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Orders from './pages/Orders'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Header from './components/shared/Header'
import ButtonTab from './components/shared/BottomTab'



const App = () => {
  return (
     <>
     <Router>
      <Header/> 
      <Routes>
        <Route  path='/' element= {<Home/>} />
        <Route  path= '/auth' element= {<Auth/>} />
        <Route path= '/orders' element= {<Orders/>} />
        </Routes>
        <ButtonTab/>
     </Router>
     </>
  )
}

export default App
