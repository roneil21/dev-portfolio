import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub }from "react-icons/bs"

function Socials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/roneil-algara-b49020242/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/roneil21' target='_blank'><BsGithub /></a>
        
    </div>
  )
}

export default Socials;