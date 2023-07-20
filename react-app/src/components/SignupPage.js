import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

function SignupPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await Axios.post('http://localhost:3001/signup', {
                userEmail: email,
                userPassword: password
            });
            console.log(response.data);
            navigate('/'); // Redirect to LoginPage.js
        } catch (error) {
            console.log(error);
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

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if (event.target.value.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
        } else {
            setPasswordError('');
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
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4 primary red-font">Join Fitness Gym Today and Transform Your Body!</h4>
                                            <p className="mb-4">At Fitness Gym, we believe that fitness is not just a hobby, it’s a lifestyle. Our state-of-the-art facilities, experienced trainers, and personalized workout plans will help you achieve your fitness goals and transform your body. Sign up today and take the first step towards a stronger, healthier you!</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo" />
                                                <h4 className="mt-1 mb-5 pb-1 red-font">Sign Up for Gymnast</h4>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="email" className="form-control input-border" placeholder="Email address" value={email} onChange={handleEmailChange} />
                                                    <label className="form-label white-font" htmlFor="email">Email</label>
                                                    {emailError && <div className="text-danger">{emailError}</div>}
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="password" className="form-control input-border" placeholder="Password" value={password} onChange={handlePasswordChange} />
                                                    <label className="form-label white-font" htmlFor="password">Password</label>
                                                    {passwordError && <div className="text-danger">{passwordError}</div>}
                                                </div>
                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-danger btn-block fa-lg gradient-custom-2 mb-3 m-3" type="submit">Sign Up</button>
                                                    <p className="white-font mb-0">Already have an account? <Link to="/">Log In</Link></p>
                                                </div>
                                            </form>
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

export default SignupPage;
