// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/Home/HomePage";
import Services from "./Pages/Services/Services";
import AboutUs from "./Pages/About/AboutUs";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Navbar from './Pages/Navbar/Navbar';
import './App.css'
import Scrolltop from './Scrolltop';

function App() {

  return (

<Router>
 <Scrolltop/>
    <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="home" element={<HomePage />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
      
    </Routes>

</Router>
  )
}

export default App
