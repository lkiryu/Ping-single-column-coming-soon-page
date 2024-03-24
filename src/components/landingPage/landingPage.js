import React from "react";
import logo from '../../images/logo.svg'
import Inputs from "../inputs/inputs";
import dashboard from '../../images/illustration-dashboard.png'

import './landingPage.css'

const LandingPage = () => {
    return (
        <div className="landingPage">
            <a href="/" className="logo">
                <img src={logo} alt="logo"></img>
            </a>
            <h1>We are launching <span>soon!</span></h1>
            <h2>Subscribe and get notified</h2>

            <Inputs />

            <img src={dashboard} alt="dashboard" className="dashboard"></img>

            <ul className="social">
                <li><a href="/"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
            </ul>
            <p className="rights">©️ Copyright Ping. All rights reserved.</p>
        </div>
    )
}

export default LandingPage