import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '@pages/home/Home.jsx'
import Contact from '@pages/Contact.jsx'
import PHP from '@pages/php/PHP.jsx'
import Variable from '@pages/php/Variable.jsx'
//import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="php" element={<PHP />} />
          <Route path="contact" element={<Contact />} />
          <Route path="php/variable" element={<Variable />} />
        </Route>
      </Routes>
    </>
  )
}

export default App