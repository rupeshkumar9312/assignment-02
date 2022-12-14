import React from 'react'
import Article from './Article'
import Footer from './Footer'
import Header from './Header'
import './Section.css'

function Section() {
  return (
    <div className="section">
        Section
        <Header/>
        <Article/>
        <Footer/>
    </div>
  )
}

export default Section