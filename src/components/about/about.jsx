import React from 'react'
import './about.css'


export default function About() {
  return (
    <>

      <div className='about d-flex justify-content-center align-items-center flex-column'>
        <h3 className='mt-5'>
          about component
        </h3>
        <div className="icon-div d-flex gap-3 align-items-center justify-content-center mt-3">
          <div className="white-line"></div>
          <i class="fa-solid fa-star"></i>
          <div className="white-line"></div>
        </div>
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-1"></div>
          <div className="col-md-5 mt-2 left">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
          <div className="col-md-5 mt-2 right">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
          <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </>

  )
}
