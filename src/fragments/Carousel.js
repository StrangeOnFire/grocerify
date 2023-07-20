import React from 'react'
import slideOne from '../images/carousel/img6.png'
import slideTwo from '../images/carousel/img7.png'
import slideThree from '../images/carousel/img4.png'
export default function Corousel() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel z-0 slide pt-3 " data-bs-ride="carousel">
                <div className="carousel-inner carsl-img rounded-2xl z-0">
                    <div className="carousel-item active">
                        <img src={slideOne} className="d-block rounded-2xl shadow-lg w-100 z-0" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slideTwo} className="d-block rounded-2xl shadow-lg w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slideThree} className="d-block rounded-2xl shadow-lg w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
