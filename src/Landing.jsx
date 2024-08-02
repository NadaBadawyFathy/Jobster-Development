
import React from 'react';
import './Landing.css';
import logo from './assets/logo.png'; 
import lan from './assets/landing.png'; 
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="container">
            <header className="landing-header">
                <img src={logo} alt="Jobster Logo" className="logo-image" />
            </header>

            <main className="landing-main">
            <div className="text-section">
                <h1 className="main-title">
                    Job <span className="highlight">Tracking</span> App
                </h1>
            <p className="description">
                Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie
                raclette taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom
                meggings bicycle rights.
            </p>
            <Link to='/login'>
                <button className="cta-button">Login/Register</button>
            </Link>
            </div>
            <div className="image-section">
                <img src={lan} alt="" className="landing-image" />
            </div>
            </main>
            </div>
    </div>
    );
};

export default Landing;
