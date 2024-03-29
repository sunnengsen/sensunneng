import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './views/Navbar'
import Footer from './views/Footer'
import Bady from './views/Bady'

export default function App() {
  return (
    <div>
      <Navbar />
      <Bady />
      <Footer />
    </div>
  )
}
