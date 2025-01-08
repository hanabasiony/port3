import React from 'react'
import './home.css'
export default function Home() {
  return (
    <>
      <main className='home'>
        <div className="inner d-flex flex-column justify-content-center align-items-center">
          <div className="img-div mt-5">
            <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="peson" />
          </div>
          <h2>start Framework</h2>
          <div className="icon-div d-flex gap-3 align-items-center justify-content-center">
            <div className="white-line"></div>
            <i class="fa-solid fa-star"></i>
            <div className="white-line"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </main>

    </>
  )
}
