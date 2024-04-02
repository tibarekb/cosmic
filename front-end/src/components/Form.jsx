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
    
        const handleSubmit = async (e) => {
            setLoading(true);
            e.preventDefault();
    
            try {
                const res = await api.post(route, { username, password })
                if (method === "login") {
                    localStorage.setItem(ACCESS_TOKEN, res.data.access);
                    localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                    navigate("/home")
                } else {
                    navigate("/login")
                }
            } catch (error) {
                alert(error)
            } finally {
                setLoading(false)
            }
        };

    return (
        
        <form onSubmit={handleSubmit}>
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

            <input
                className="input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {/* {loading && <LoadingIndicator />} */}
            <div className="submit-container">
            <button type="submit" className="submit">
                Login
            </button>
            </div>
           

            </div>
            </div>
        </form>
    );
}

export default Form