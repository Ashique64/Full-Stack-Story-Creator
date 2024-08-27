import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./ContributionCreate.scss";

const ContributionCreate = () => {
    const { id } = useParams();
    const [content, setContent] = useState("");
    const [error, setError] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                `http://localhost:8000/api/stories/${id}/contribute/`,
                {
                    content,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            navigate(`/storydetails/${id}`, { state: { newContribution: true } });
        } catch (error) {
            setError("Contribution Failed or Reach Max of Contributions");
        }
    };

    return (
        <>
            <NavBar />
            <div className="container-fluid contribution_page">
                <div
                    className="item "
                    style={{
                        backgroundColor: isHovered ? "#fdf7e4" : "rgb(233, 140, 26)",
                        color: isHovered ? "rgb(233, 140, 26)" : "#fdf7e4",
                    }}
                >
                    <h2>Add Your Contribution</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label>Your Text</label>
                            <textarea
                                value={content}
                                className="form-control"
                                rows={4}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Add your contribution (max 20 words)"
                                required
                            />
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <button
                            className="btn"
                            type="submit"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Add Contribution
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContributionCreate;
