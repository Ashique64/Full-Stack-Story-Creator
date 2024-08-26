import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Authentication/AuthSlice";
import "./Login.scss";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/login/", {
                username,
                password,
            });
            localStorage.setItem("token", response.data.access);
            dispatch(login({username}));
            navigate("/");
        } catch (error) {
            setError("Invalid credentials");
        }
    };

    const handleSignupNavigate = () =>{
        navigate('/signup')
    }

    return (
        <div className="container-fluid login_container">
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
                    <h6>Don't have an account ? <span onClick={handleSignupNavigate}>Signup</span></h6>
                    <button className="btn" type="submit">LOG-IN</button>
                    {error && <p className="mt-2" style={{ color: "red" }}>{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Login;
