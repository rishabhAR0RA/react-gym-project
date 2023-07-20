/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function About() {
    return (
        <div>
            {/* About Start */}
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img className="img-fluid mb-4 mb-lg-0 about-img" src="image/about.jpg" alt="Image" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="display-4 font-weight-bold mb-4">10 Years Experience</h2>
                        <p>With over 10 years of experience in the fitness industry, we have helped countless individuals achieve their fitness goals. Our team of experienced trainers are dedicated to helping you reach your full potential.</p>
                        <div className="row py-2">
                            <div className="col-sm-6">
                                <i className="flaticon-barbell display-2 text-primary"></i>
                                <h4 className="font-weight-bold">Certified GYM Center</h4>
                                <p>We are a certified gym center, ensuring that our facilities and trainers meet the highest standards of quality and safety.</p>
                            </div>
                            <div className="col-sm-6">
                                <i className="flaticon-medal display-2 text-primary"></i>
                                <h4 className="font-weight-bold">Award Winning</h4>
                                <p>We are proud to have won multiple awards for our commitment to excellence in the fitness industry.</p>
                            </div>
                        </div>
                        <a href="/home" className="btn btn-lg px-4 btn-outline-primary">Learn More</a>
                    </div>
                </div>
            </div>
            {/* About End */}
        </div>
    );
}

export default About;