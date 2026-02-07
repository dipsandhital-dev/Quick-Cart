import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Orders from './pages/Orders'
import Home from './pages/Home'
import Auth from './pages/Auth'



const App = () => {
  return (
     <>
     <Router>
      <Routes>
        <Route  path='/' element= {<Home/>} />
        <Route  path= '/auth' element= {<Auth/>} />
        <Route path= '/orders' element= {<Orders/>} />
        </Routes>
     </Router>
     </>
  )
}

export default App
