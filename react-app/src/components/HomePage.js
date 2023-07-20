/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';
import './HomePage.css';
import Navbar from './NavBar';
import Carousel from './Carousel';
import GymClass from './GymClass';
import About from './About';
import Features from './Features';
import GymFeatures from './GymFeatures';
import ClassTimeTable from './ClassTimeTable';
import Team from './Team';
import Footer from './Footer';

function HomePage() {
    return (
        <div>
            <head>

                {/* Favicon */}
                <link href="img/favicon.ico" rel="icon" />

                {/* Font Awesome */}
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />

                {/* Flaticon Font */}
                <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />

                {/* Customized Bootstrap Stylesheet */}
                <link href="css/style.min.css" rel="stylesheet" />
            </head>

            <div className="bg-white">
                <Navbar />
                <Carousel />
                <GymClass />
                <About />
                <Features />
                <GymFeatures />
                <ClassTimeTable />
                <Team />
                <Footer />


                {/* Back to Top  */}
                {/* eslint-disable-next-line */}
                <a href="#" class="btn btn-outline-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>

                {/* Template Javascript */}
                <script src="js/main.js"></script>
            </div>
        </div>
    );
}

export default HomePage;