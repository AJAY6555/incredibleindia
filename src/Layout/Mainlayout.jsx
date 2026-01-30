import React from 'react'
import Nav from '../Components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

function Mainlayout() {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Mainlayout
