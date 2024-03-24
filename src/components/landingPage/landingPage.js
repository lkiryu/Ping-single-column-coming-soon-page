import React from "react";
import logo from '../../images/logo.svg'
import dashboard from '../../images/illustration-dashboard.png'

const LandingPage = () => {
    return (
        <div className="landingPage">
            <a href="/">
                <img src={logo} alt="logo"></img>
            </a>
            <h1>We are launching <span>soon!</span></h1>
            <h2>Subscribe and get notified</h2>

            <div className="inputs">
                <div className="email">
                    <input type="email" placeholder="Your email address..." className="emailInput"></input>
                    <p className="error"></p>
                </div>
                <input type="submit" value='Notify Me' className="submitImput"></input>
            </div>

            <img src={dashboard} alt="dashboard"></img>

            <ul className="social">
                <li><a href="/"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="/"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="/"><i class="fa-brands fa-instagram"></i></a></li>
            </ul>
            <p className="rights">©️ Copyright Ping. All rights reserved.</p>
        </div>
    )
}

export default LandingPage