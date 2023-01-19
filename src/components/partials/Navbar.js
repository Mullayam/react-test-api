import React from 'react'
import { Link } from 'react-router-dom'
 
export default function Navbar() {
  return (
    <>
         
    <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
        <div className="container">
            <Link  className="navbar-brand" to="/">
                <img src="assets/imgs/brand.svg"  className="brand-img"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                     
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item ml-0 ml-lg-4">
                        <Link className="nav-link btn btn-primary" to="/Login">Login</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
