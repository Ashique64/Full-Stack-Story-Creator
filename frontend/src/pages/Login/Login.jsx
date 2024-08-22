import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/login/", {
                username,
                password,
            });
            localStorage.setItem("token", response.data.access);
            navigate("/");
        } catch (error) {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="container-fluid">
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="item">
                        <label>Username</label>
                        <input className="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="item">
                        <label>Password</label>
                        <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button className="btn" type="submit">LOG-IN</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
