import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./OnGoingList.scss";

const OnGoingList = () => {
    const [onGoingStories, setOnGoingStories] = useState([]);
    const [error, setError] = useState("");
    const displayedStories = onGoingStories.slice(0, 4);
    const {isAuthenticated} = useSelector((state) => state.auth)
    const navigate = useNavigate()


    useEffect(() => {
        const fetchOnGoingStories = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/stories/ongoing/" ,{

                }); 
                setOnGoingStories(response.data);
            } catch (err) {
                setError("Failed to fetch OnGoing Stories");
                console.error("Fetch error:", err);
            }
        };
        fetchOnGoingStories();
    }, []);


    const handleCard = (storyId) => {
        if(isAuthenticated) {
            navigate(`/storydetails/${storyId}`);
        } else {
            alert("Please Login to create a new story");
            navigate("/login");
        }
    };

    return (
        <div className="container ongoing_story">
            <h2>On-Going Stories</h2>
            {error && (
                <p className="error-message" style={{ color: "red" }}>
                    {error}
                </p>
            )}
            <div className="row">
                {onGoingStories.length === 0 ? (
                    <p>No OnGoing Stories available</p>
                ) : (
                    displayedStories.map((story) => (
                        <div onClick={() => handleCard(story.id)} className="col-md-3 item" key={story.id}>
                            <div className="ongoing_card">
                                <img src={story.image || "/Images/static/CarouselBook1.jpg"} alt="" />
                                <h5>{story.title}</h5>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default OnGoingList;
