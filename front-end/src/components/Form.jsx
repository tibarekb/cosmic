import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Login.css"
// import LoadingIndicator from "./Loadingindicator";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // const name = method === "login" ? "Login" : "Register";

    method == "Login"
    
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/home")
            } 
        catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>Login</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {/* {loading && <LoadingIndicator />} */}
            <button className="form-button" type="submit">
                Submit
            </button>
        </form>

        //   <div className="container">
        //     <div className="header">
        //         <div className="text">Login</div>
        //     </div>

        //     <div className="headline">
        //         <p>
        //             You will be redirected to home <br /> page 
        //         </p>
                
        //     </div>

        //     <div className="inputs">
            
        //     <div className="input">
        //         <input type="text" 
        //         value={username}
        //         onChange={(e) => setUsername(e.target.value)}
        //         placeholder="Username"/>
        //     </div>

        //     <div className="input">
        //         <input type="password" 
        //         value={password}
        //         onChange={(e) => setPassword(e.target.value)}                
        //         placeholder="Password" />
        //     </div>
            
        //     <div className="submit-container">
        //         <button className="submit" type="button" onSubmit={handleSubmit}>Submit </button>
                
        //     </div>
        //     </div>
        //     </div>
    );
}

export default Form