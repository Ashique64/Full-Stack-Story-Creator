import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import "./CompletedStories.scss";

const CompletedStories = () => {
    const [completedStories, setCompletedStories] = useState([]);
    const [error, setError] = useState("");


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
            } finally {
                setLoading(false);
            }
        };
        fetchCompletedStories();
    }, []);

    return (
        <>
            <NavBar />
            <div className="container-fluid completed_story_section">
                <h2>Completed Stories</h2>
                {error ? (
                  <p className="mt-5">{error}</p>
                ) : completedStories.length === 0 ? (
                  <p className="mt-5">No Completed Stories available</p>
                ) : (
                    <div className="row">
                        {completedStories.map((story) => (
                            <div key={story.id} className="col-sm-6 col-md-3 item">
                                <div className="completed_story_card">
                                    <img src={story.image || "/Images/static/CarouselBook2.jpg"} alt={story.title} />
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

export default CompletedStories;
