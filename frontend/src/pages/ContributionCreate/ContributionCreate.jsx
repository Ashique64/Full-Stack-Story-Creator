import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ContributionCreate = () => {
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { storyId } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`http://localhost:8000/api/stories/${storyId}/contribute/`, {
                text,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            navigate(`/stories/${storyId}`);
        } catch (error) {
            setError("Contribution failed");
        }
    };

    return (
        <div>
            <h2>Add Your Contribution</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Your Text</label>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} required />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Add Contribution</button>
            </form>
        </div>
    );
};

export default ContributionCreate;
