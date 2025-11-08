import react , { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Verify from './pages/verify.jsx' 
import Login from './pages/login.jsx'
import Register from './pages/Register.jsx'




import {Routes , Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <Navbar />
    <Routes>
    <Route  path={"/"}  element={<Home/>} />
    <Route path={"/about"} element={<About/>} />
    <Route path={"/contact"} element={<Contact/>} />  
    <Route path={"/verify"} element={<Verify/>} />
    <Route path={"/login"} element={<Login/>}/>
    <Route path={"/register"} element={<Register/>}/>
    <Route path={"*"} element={<> 404 not found </>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
