import React from "react";

const Inputs = () => {
    return(
        <div className="inputs">
                <div className="email">
                    <input type="email" placeholder="Your email address..." className="emailInput"></input>
                    <p className="error"></p>
                </div>
                <input type="submit" value='Notify Me' className="submitImput"></input>
            </div>
    )
}

export default Inputs