import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            await axios.post("http://localhost:8000/api/signup/", {
                username,
                email,
                password,
            });
            navigate("/login");
        } catch (error) {
            setError("Registration failed");
        }
    };

    const handleLoginNavigate = () => {
        navigate('/login')
    }

    return (
        <div className="container-fluid signup_container">
            <div className="signup">
                <h2>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <div className="item">
                        <label>Username</label>
                        <input className="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="item">
                        <label>Email</label>
                        <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="item">
                        <label>Password</label>
                        <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="item">
                        <label>Confirm Password</label>
                        <input
                            className="form-control"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <h6>Already have an account ? <span onClick={handleLoginNavigate}>Login</span></h6>
                    <button className="btn" type="submit">SIGN-UP</button>
                    {error && <p className="mt-2" style={{ color: "red" }}>{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Signup;
