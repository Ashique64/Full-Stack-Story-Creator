import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./CompletedList.scss";

const CompletedList = () => {
    const [completedStories, setCompletedStories] = useState([]);
    const [error, setError] = useState("");
    const displayedStories = completedStories.slice(0, 3);
    const { isAuthenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCompletedStories = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/stories/completed/", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setCompletedStories(response.data);
            } catch (err) {
                setError("Failed to fetch Completed Stories");
            }
        };
        fetchCompletedStories();
    }, []);

    const handleCard = (storyId) => {
        if (isAuthenticated) {
            navigate(`/storydetails/${storyId}`);
        } else {
            alert("Please Login to view story details");
            navigate("/login");
        }
    };

    return (
        <div className="container-fluid completed_story">
            <h2>Completed Stories</h2>
            {error && (
                <p className="error-message" style={{ color: "red" }}>
                    {error}
                </p>
            )}
            <div className="row">
                {completedStories.length === 0 ? (
                    <p>No Completed Stories available</p>
                ) : (
                    displayedStories.map((story) => (
                        <div onClick={() => handleCard(story.id)} key={story.id} className="col-12 col-md-4 item">
                            <div className="completed_card">
                                <img src={story.image || "/Images/static/CarouselBook1.jpg"} alt={story.title} />
                                <h5>{story.title}</h5>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CompletedList;
