import React from "react";
import validation from "../validation/validation";

import './inputs.css'

const Inputs = () => {
    return(
        <div className="inputs">
                <div className="email">
                    <input type="email" placeholder="Your email address..." className="emailInput"></input>
                    <p className="error-mensage"></p>
                </div>
                <input type="submit" value='Notify Me' className="submitImput" onClick={validation}></input>
            </div>
    )
}

export default Inputs