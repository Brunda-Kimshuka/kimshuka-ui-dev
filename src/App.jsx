// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/Home/HomePage";
import Services from "./Pages/Services/Services";
import AboutUs from "./Pages/About/AboutUs";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Navbar from './Pages/Navbar/Navbar';
import './App.css'

function App() {

  return (

<Router>
 <div className={ ` w-full h-full flex flex-col`}>
   <div className="fixed top-0 left-0 w-full z-10">
     <Navbar />
   </div>
    <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="home" element={<HomePage />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
    </Routes>
</div>  
</Router>
  )
}

export default App
