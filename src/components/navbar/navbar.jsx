import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Fotter from '../content/fotter/fotter'
// import Home from './../home/home';
import Portfolio from './../portfolio/portfolio';
import './navbar.css';




export default function Navbar() {


  return (
    <div>
      <div className="outer-nav position-fixed end-0 start-0 py-3 " >
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link to="home" className="navbar-brand home-link m-0" >START FRAMWORK</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link to="about" className="nav-link active my-nav-links" aria-current="page" >About</Link>
                </li>
                <li className="nav-item ">
                  <Link to="portfolio" className="nav-link my-nav-links" >Portfolio</Link>
                </li>
                <li className="nav-item ">
                  <Link to="content" className="nav-link my-nav-links" >contact</Link>
                </li>

              </ul>

            </div>
          </div>
        </nav>
      </div>

      <Outlet />
      <Fotter />

    </div>
  )
}
