import React from 'react'
import './portfolio.css'
import photo1 from './img/poert1.png'
import photo2 from './img/port2.png'
import photo3 from './img/port3.png'

export default function Portfolio() {
    const modalStyle = {
    top: '18%' , left:' 34%' ,position: 'absolute', width: '100%' ,transform: 'scale(1.2) ', background: ' rgba(26, 188, 156, 0.5)',
    }
    return (
        <>
            <div className='portfolio pb-4'>
                <h5>portfolio component</h5>
                <div className="icon-div d-flex gap-3 align-items-center justify-content-center">
                    <div className="white-line"></div>
                    <i class="fa-solid fa-star"></i>
                    <div className="white-line"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="inner">
                                <div className="img-div" data-bs-toggle="modal" data-bs-target="#photo1">
                                    <img src={photo1} alt=" home" />
                                    <div className="layer d-flex justify-content-center align-items-center">
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="inner">
                                <div className="img-div" data-bs-toggle="modal" data-bs-target="#photo2">
                                    <img src={photo2} alt="cake" />
                                    <div className="layer d-flex justify-content-center align-items-center">
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="inner">
                                <div className="img-div" data-bs-toggle="modal" data-bs-target="#photo3">
                                    <img src={photo3} alt="circus" />
                                    <div className="layer d-flex justify-content-center align-items-center">
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="inner">
                                <div className="img-div" data-bs-toggle="modal" data-bs-target="#photo1">
                                    <img src={photo1} alt=" home" />
                                    <div className="layer d-flex justify-content-center align-items-center">
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="inner">
                                <div className="img-div" data-bs-toggle="modal" data-bs-target="#photo2">
                                    <img src={photo2} alt="cake" />
                                    <div className="layer d-flex justify-content-center align-items-center">
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="inner">
                                <div className="img-div" data-bs-toggle="modal" data-bs-target="#photo3">
                                    <img src={photo3} alt="circus" />
                                    <div className="layer d-flex justify-content-center align-items-center">
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal " id="photo1" tabindex="-1" aria-labelledby="photo1" aria-hidden="true">
                <div className="modal-dialog" style={modalStyle}>
                    <div className="modal-content">
                        <img src={photo1} alt=" home" />
                    </div>
                </div>
            </div>

            <div className="modal " id="photo2" tabindex="-1" aria-labelledby="photo3" aria-hidden="true">
                <div className="modal-dialog" style={modalStyle}>
                    <div className="modal-content">
                        <img src={photo2} alt=" cake" />
                    </div>
                </div>
            </div>

            <div className="modal " id="photo3" tabindex="-1" aria-labelledby="photo3" aria-hidden="true">
                <div className="modal-dialog" style={modalStyle}>
                    <div className="modal-content">
                        <img src={photo3} alt=" circus" />
                    </div>
                </div>
            </div>

        </>
    )
}
