/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function Team() {
    return (
        <div>
            {/* Team Start */}
            <div className="container pt-5 team">
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-primary font-weight-bold">Our Trainers</h4>
                    <h4 className="display-4 font-weight-bold">Meet Our Expert Trainers</h4>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="card border-0 bg-secondary text-center text-white">
                            <img className="card-img-top" src="image/team-1.jpg" alt="Image" />
                            <div className="card-social d-flex align-items-center justify-content-center card-social-links">
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-instagram"></i></a>
                            </div>
                            <div className="card-body bg-secondary">
                                <h4 className="card-title text-primary">Jason Brown</h4>
                                <p className="card-text">Trainer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="card border-0 bg-secondary text-center text-white">
                            <img className="card-img-top" src="image/team-2.jpg" alt="Image" />
                            <div className="card-social d-flex align-items-center justify-content-center card-social-links">
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-instagram"></i></a>
                            </div>
                            <div className="card-body bg-secondary">
                                <h4 className="card-title text-primary">Matthew Taylor</h4>
                                <p className="card-text">Trainer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="card border-0 bg-secondary text-center text-white">
                            <img className="card-img-top" src="image/team-3.jpg" alt="Image" />
                            <div className="card-social d-flex align-items-center justify-content-center card-social-links">
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-instagram"></i></a>
                            </div>
                            <div className="card-body bg-secondary">
                                <h4 className="card-title text-primary">William Jackson</h4>
                                <p className="card-text">Trainer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="card border-0 bg-secondary text-center text-white">
                            <img className="card-img-top" src="image/team-4.jpg" alt="Image" />
                            <div className="card-social d-flex align-items-center justify-content-center card-social-links">
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="/home"><i className="fab fa-instagram"></i></a>
                            </div>
                            <div className="card-body bg-secondary">
                                <h4 className="card-title text-primary">Max Lee</h4>
                                <p className="card-text">Trainer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
        </div>
    );
}

export default Team;