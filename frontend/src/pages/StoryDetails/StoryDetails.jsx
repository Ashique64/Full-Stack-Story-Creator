import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "./StoryDetails.scss";

const StoryDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const [story, setStory] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state && location.state.newContribution) {
            fetchStoryDetails();
        }
    }, [location.state]);

    useEffect(() => {
        fetchStoryDetails();
    }, [id]);

    const fetchStoryDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/stories/${id}/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            // console.log(response.data)
            console.log(response.data.contributions);

            setStory(response.data);
        } catch (err) {
            setError("Failed to fetch details");
        }
    };

    const handleContribute = () => {
        navigate(`/storydetails/${id}/contribute`);
    };

    const contributionsLeft = story ? 9 - (story.contributions ? story.contributions.length : 0) : 9;

    const combinedText = story
        ? story.first_line +
          " " +
          (story.contributions ? story.contributions.map((contribution) => contribution.content).join(" ") : "")
        : "";

    return (
        <>
            <NavBar />
            <div className="container-fluid details_page">
                {story ? (
                    <div className="row story_details_page">
                        <div className="col-md-6">
                            <div className="story_img">
                                <img src={story.image || "/Images/static/CarouselBook2.jpg"} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="story_info">
                                <h6>{contributionsLeft > 0 ? `${contributionsLeft} Contribution(s) left` : "Completed"}</h6>
                                <h3>{story.title}</h3>
                                <h5>
                                    Created: <span>{story.created_by}</span>
                                </h5>
                                <p>{combinedText}</p>
                                <button onClick={handleContribute} className="btn">
                                    CONTRIBUTE
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>{error || "Loading story detail..."}</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default StoryDetails;
