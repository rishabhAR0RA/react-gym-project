import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleSubmit = async (event) => {
        console.log('Submitting login form');
        event.preventDefault();
        try {
            const response = await Axios.post('http://localhost:3001/login', {
                userEmail: email,
                userPassword: password
            });
            console.log(response.data);
            navigate('/home');
        } catch (error) {
            console.log("Invalid login details: ");
            console.log(error);
            setLoginError('Invalid login details. Please try again.');
        }
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        if (!event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    }

    return (
        <div className="section-container">
            <section className="h-100 gradient-form">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black transparent-bg">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo" />
                                                <h4 className="mt-1 mb-5 pb-1 red-font">Gymnast</h4>
                                            </div>

                                            <form onSubmit={handleSubmit}>
                                                <p className="white-font">Please login to your account</p>
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example11" className="form-control input-border"
                                                        placeholder="Email address" value={email} onChange={handleEmailChange} />
                                                    <label className="form-label white-font" htmlFor="form2Example11">Email</label>
                                                    {emailError && <div className="text-danger">{emailError}</div>}
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example22" className="form-control input-border" value={password} onChange={(event) => setPassword(event.target.value)} />
                                                    <label className="form-label white-font" htmlFor="form2Example22">Password</label>
                                                </div>
                                                {loginError && <div className="text-danger mb-4">{loginError}</div>}

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-danger btn-block fa-lg gradient-custom-2 mb-3 m-3" type="submit">Login</button>
                                                    <a className="text-muted" href="#!">Forgot password?</a>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2 white-font">Don't have an account?</p>
                                                    <Link to="/signup">
                                                        <button type="button" className="btn btn-outline-danger">Create new</button>
                                                    </Link>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4 primary red-font">Transform Your Body at Fitness Gym - Your Ultimate Destination for Fitness</h4>
                                            <p className="mb-4">Welcome to Fitness Gym, where we believe that fitness is not just a hobby, it’s a lifestyle. Our state-of-the-art facilities, experienced trainers, and personalized workout plans will help you achieve your fitness goals and transform your body. Whether you're looking to lose weight, build muscle, or simply stay active, Fitness Gym has everything you need to get fit and healthy. Join us today and take the first step towards a stronger, healthier you!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LoginPage;