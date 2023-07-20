import React from "react";

function Navbar() {
    return (
        <div>
            {/* Navbar Start */}
            <div className="container-fluid p-0 nav-bar">
                <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                    <a href="/" className="navbar-brand">
                        <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">Gymnast</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto p-4 bg-secondary">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="/about" className="nav-item nav-link">About Us</a>
                            <a href="/features" className="nav-item nav-link">Our Features</a>
                            <a href="/classes" className="nav-item nav-link">Classes</a>
                            <a href="/contact" className="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
        </div>
    );
}

export default Navbar;