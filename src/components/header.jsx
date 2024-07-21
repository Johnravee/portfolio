import React from 'react'
import '../assets/styles/header.css'
import { Link } from 'react-router-dom'

export default function Header() {

  function humbergerNav(){
    document.querySelector('.links').classList.toggle('left')
    document.body.classList.toggle("forscroll")
    document.querySelector("#Hamburger").classList.toggle("bi-x-lg")
  }

  function clickLink(){
    document.querySelector('.links').classList.remove('left')
    document.body.classList.remove("forscroll")
    document.querySelector("#Hamburger").classList.remove("bi-x-lg")
  }

  return (
    <header>
      <div className="logo">
        <Link to="/"><h1>Johnrave</h1></Link>
      </div>

      <nav className='links'>
        <Link to="/about" className="link" onClick={clickLink}>About</Link>
        <Link to="/works" className="link" onClick={clickLink}>Works</Link>
        <Link to="/background" className="link" onClick={clickLink}>Background</Link>
        <Link to="/contact" className="link" onClick={clickLink}>Contact</Link>
      </nav>

      <div className="icons">
        <div className="icon-logo">
          <a href="https://www.linkedin.com/in/johrave-mimay-740a06237/" target="_blank"><i className="bi bi-linkedin"></i></a>
          <a href="https://github.com/Johnravee" target="_blank" ><i className="bi bi-github"></i></a>
         <a href="https://medium.com/@johnravemimayn" target="_blank" ><i class="bi bi-medium"></i></a>
        </div>
      </div>

      <div className="hamburger">
        <i className="fa-solid fa-bars" id="Hamburger" onClick={humbergerNav}></i>
      </div>
    </header>
  )
}
