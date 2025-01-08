import React from 'react'
import './fotter.css'

export default function Fotter() {
  return (
    <div className='rapper footer '>
      <div className="upper">
      <div className="container">
      <div className=" row">
        <div className="location col-md-4 my-5">
          <h5>location</h5>
          <p>2215 John Daniel Drive</p>
          <h6>Clark, MO 65243</h6>
        </div>
        <div className="icons col-md-4 my-5">
        <p>AROUND THE WEB</p>
        <div className="icons-wrapper d-flex justify-content-center align-items-center gap-2">
          <div className="icon d-flex align-items-center justify-content-center"><i class="fa-brands fa-facebook"></i></div>
          <div className="icon d-flex align-items-center justify-content-center"><i class="fa-brands fa-twitter"></i></div>
          <div className="icon d-flex align-items-center justify-content-center"><i class="fa-brands fa-linkedin"></i></div>
          <div className="icon d-flex align-items-center justify-content-center"><i class="fa-solid fa-globe"></i></div>
        </div>
        </div>
        <div className=" col-md-4 my-5">
          <h3>
          ABOUT FREELANCER
          </h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
      </div>
      </div>
      <div className="lower text-center">
        Copyright © Your Website 2021
      </div>
    </div>
  )
}
