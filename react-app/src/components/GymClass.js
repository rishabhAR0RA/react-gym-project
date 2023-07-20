import React from "react";

function GymClass() {
    return (
        <div>
            {/* Gym Class Start */}
            <div className="container gym-class mb-5">
                <div className="row px-3">
                    <div className="col-md-6 p-0">
                        <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                            <i className="flaticon-six-pack"></i>
                            <h3 className="display-4 mb-3 text-white font-weight-bold">Body Building</h3>
                            <p>
                                Our body building classes are designed to help you build muscle and increase strength. Our experienced trainers will guide you through a variety of exercises and techniques to help you achieve your fitness goals. Whether you're a beginner or an experienced lifter, our classes are tailored to meet your needs and help you reach your full potential.
                            </p>
                            <a href="/home" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                            <i className="flaticon-bodybuilding"></i>
                            <h3 className="display-4 mb-3 text-white font-weight-bold">Muscle Building</h3>
                            <p>
                                Our muscle building classes help increase muscle mass and improve your physique. Our trainers guide you through exercises and techniques to achieve your fitness goals. Whether you're a beginner or experienced, our classes meet your needs and help you reach your potential. Join us today and start building your dream body!
                            </p>
                            <a href="/home" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Gym Class End */}
        </div>
    );
}

export default GymClass;