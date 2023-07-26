import React from 'react'
import CV from "../../assets/Roneil Algara CV.pdf"

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA;