import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./StoryCreate.scss";

const StoryCreate = () => {
    const [title, setTitle] = useState("");
    const [firstLine, setFirstLine] = useState("");
    const [image, setImage] = useState(null);
    const [error, setError] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            setError("Title is required");
            return;
        }

        const wordCount = firstLine.trim().split(/\s+/).length;
        if (!firstLine.trim()) {
            setError("First line of the story is required");
            return;
        } else if (wordCount > 20) {
            setError("First line cannot exceed 20 words");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("first_line", firstLine);
        if (image) formData.append("image", image);

        try {
            await axios.post("http://localhost:8000/api/stories/create/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            navigate("/");
        } catch (error) {
            setError("Story creation failed. Please try again");
        }
    };

    return (
        <div className="create_story">
            <div
                className="item"
                style={{
                    backgroundColor: isHovered ? "#fdf7e4" : "rgb(233, 140, 26)",
                    color: isHovered ? "rgb(233, 140, 26)" : "#fdf7e4",
                }}
            >
                <h2>Create a New Story</h2>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label>Title</label>
                        <input
                            className="form-control"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="field">
                        <label>First Line</label>
                        <textarea
                            className="form-control"
                            rows={3}
                            value={firstLine}
                            onChange={(e) => setFirstLine(e.target.value)}
                            required
                        />
                    </div>
                    <div className="field">
                        <label>Upload Image</label>
                        <input
                            className="form-control"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button
                        className="btn"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        type="submit"
                    >
                        CREATE
                    </button>
                </form>
            </div>
        </div>
    );
};

export default StoryCreate;
