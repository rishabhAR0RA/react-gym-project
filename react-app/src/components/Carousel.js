/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function Carousel() {
    return (
        <div>
            {/* Carousel Start */}
            <div className="container-fluid p-0">
                <div id="blog-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="/image/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h3 className="text-primary text-capitalize m-0">Gym & Fitness Center</h3>
                                <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">Best Gym In Town</h2>
                                <a href="/home" className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Join Us Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Carousel End */}
        </div>
    );
}

export default Carousel;