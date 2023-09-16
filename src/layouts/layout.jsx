import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/Footer.jsx'
import {Outlet} from 'react-router-dom'

const layout = () => {
  return (
    < >
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default layout