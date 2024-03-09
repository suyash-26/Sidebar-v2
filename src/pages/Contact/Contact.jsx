import React from 'react'
import "./contact.css"
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <> 
        <div className='contact'>
          <h3>Contact</h3>
          <Link to="/about">
          <button className='btn-1'>go to about</button>
        </Link>
        </div>
       
    </>
  )
}
