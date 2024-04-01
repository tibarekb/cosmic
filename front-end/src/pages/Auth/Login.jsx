import React from "react";
import "../../styles/Login.css"

const Login = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
            </div>

            <div className="headline">
                <p>
                    You will be redirected to home <br /> page 
                </p>
                
            </div>

            <div className="inputs">
            
            <div className="input">
                <input type="text" placeholder="Username"/>
            </div>

            <div className="input">
                <input type="password" placeholder="Password" />
            </div>
            
            <div className="submit-container">
                <div className="submit">Submit</div>
            </div>
            </div>
            </div>
    )
}

export default Login