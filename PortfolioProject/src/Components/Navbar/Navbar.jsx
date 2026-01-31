import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="navbar">
            <div className="logo">
                <i className="fa-solid fa-code"></i>
                <h2>KSHITIJ</h2>
            </div>
            <div className="nav-elements">
                <ul>
                    <li>Homepage</li>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar