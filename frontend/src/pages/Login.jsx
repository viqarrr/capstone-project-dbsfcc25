import React from 'react'
import '../styles/authentication/stylelogin.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div>
      <Navbar/>
      <LoginForm/>
      <Footer/>
    </div>
  )
}

export default Login