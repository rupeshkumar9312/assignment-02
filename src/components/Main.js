import React from 'react'
import './Main.css'
import Header from './Header'
import Footer from './Footer'
import Middle from './Middle'

function Main() {
  return (
    <div className="main">
        <Header/>
        <Middle/>
        <Footer/>
    </div>
  )
}

export default Main