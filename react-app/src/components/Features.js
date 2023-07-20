import React from "react";

function Features() {
    return (
        <div>
            {/* Features Start */}
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-4 p-0">
                        <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: '300px' }}>
                            <i className="flaticon-training display-3 text-primary mr-3"></i>
                            <div>
                                <h2 className="text-white mb-3">Progression</h2>
                                <p>Our gym offers a variety of programs and training options to help you progress towards your fitness goals. Our experienced trainers will guide you every step of the way.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="d-flex align-items-center bg-primary text-white px-5" style={{ minHeight: '300px' }}>
                            <i className="flaticon-weightlifting display-3 text-secondary mr-3"></i>
                            <div>
                                <h2 className="text-white mb-3">Workout</h2>
                                <p>We offer a wide range of workout options to help you achieve your fitness goals, including strength training, cardio, and group fitness classes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: '300px' }}>
                            <i className="flaticon-treadmill display-3 text-primary mr-3"></i>
                            <div>
                                <h2 className="text-white mb-3">Nutrition</h2>
                                <p>We believe that nutrition is a key component of overall fitness. Our gym offers nutrition coaching and meal planning services to help you fuel your body for optimal performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}
        </div>
    );
}

export default Features;