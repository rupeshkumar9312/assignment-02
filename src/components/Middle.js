import React from 'react'
import Nav from './Nav'
import Section from './Section'
import './Middle.css'
function Middle() {
  return (
    <div className="middle">
        <Nav text="<Nav>"/>
        <Section/>
        <Nav text="<aside>"/>
    </div>
  )
}

export default Middle