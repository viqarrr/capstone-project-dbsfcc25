import React from 'react'
import '../styles/authentication/profile1.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FillProfileForm from '../components/FillProfileForm'

const FillProfile = () => {
  return (
    <div>
      <Navbar/>
      <FillProfileForm/>
      <Footer/>
    </div>
  )
}

export default FillProfile