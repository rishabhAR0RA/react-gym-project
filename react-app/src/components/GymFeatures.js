/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function GymFeatures() {
    return (
        <div>
            {/* GYM Features Start */}
            <div className="container feature pt-5">
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-primary font-weight-bold">Why Choose Us?</h4>
                    <h4 className="display-4 font-weight-bold">Benefits of Joining Our GYM</h4>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <img className="img-fluid mb-3 mb-sm-0" src="image/feature-1.jpg" alt="Image" />
                                <i className="flaticon-barbell"></i>
                            </div>
                            <div className="col-sm-7">
                                <h4 className="font-weight-bold">Videos Instruction</h4>
                                <p>Our gym offers video instruction to help you learn proper form and technique for exercises. Our experienced trainers will guide you every step of the way.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <img className="img-fluid mb-3 mb-sm-0" src="image/feature-2.jpg" alt="Image" />
                                <i className="flaticon-training"></i>
                            </div>
                            <div className="col-sm-7">
                                <h4 className="font-weight-bold">Training Calendar</h4>
                                <p>We offer a training calendar to help you plan and track your workouts. Our trainers will work with you to create a personalized plan that fits your goals and schedule.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <img className="img-fluid mb-3 mb-sm-0" src="image/feature-3.jpg" alt="Image" />
                                <i className="flaticon-trends"></i>
                            </div>
                            <div className="col-sm-7">
                                <h4 className="font-weight-bold">Free Apps & WiFi</h4>
                                <p>We offer free apps and WiFi to help you stay connected and track your progress. Our apps include workout tracking, nutrition tracking, and more.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <img className="img-fluid mb-3 mb-sm-0" src="image/feature-4.jpg" alt="Image" />
                                <i className="flaticon-support"></i>
                            </div>
                            <div className="col-sm-7">
                                <h4 className="font-weight-bold">Community Support</h4>
                                <p>Our gym offers a supportive community of like-minded individuals who are all working towards their fitness goals. Our trainers and staff are always available to offer support and guidance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* GYM Features End */}
        </div>
    );
}

export default GymFeatures;