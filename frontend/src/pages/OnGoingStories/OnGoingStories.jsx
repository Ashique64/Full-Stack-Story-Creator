import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import "./OnGoingStories.scss";

const OnGoingStories = () => {
    const [onGoingStories, setOnGoingStories] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchOnGoingStories = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/stories/ongoing/", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setOnGoingStories(response.data);
            } catch (err) {
                setError("Failed to fetch OnGoing Stories");
            }
        };
        fetchOnGoingStories();
    }, []);

    return (
        <>
            <NavBar />
            <div className="container-fluid ongoing_story_section">
                <h2>On-Going Stories</h2>
                {error ? (
                    <p className="mt-4">{error}</p>
                ) : onGoingStories.length === 0 ? (
                    <p className="mt-4">No OnGoing Stories available</p>
                ) : (
                    <div className="row">
                        {onGoingStories.map((story) => (
                            <div key={story.id} className="col-sm-6 col-md-3 item">
                                <div className="ongoing_story_card">
                                    <img src={story.image || "/Images/static/CarouselBook2.jpg"} alt="" />
                                    <h5>{story.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default OnGoingStories;
