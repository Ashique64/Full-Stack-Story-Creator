import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import "./MyAccount.scss";

const MyAccount = () => {
    const [stories, setStories] = useState([]);
    const [error, setError] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const {username} = useSelector((state) => state.auth)

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/stories/", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setStories(response.data);
            } catch (err) {
                setError("Failed to fetch Stories");
            }
        };

        fetchStories();
    }, []);

    const handleCard = (storyId) => {
        navigate(`/storydetails/${storyId}`);
    };

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <>
            <NavBar />
            <div className="myaccount">
                <div className="row account_row">
                    <div className="col-md-9 item1">
                        <div className="your_stories">
                            <h2>Your Stories</h2>
                            <div className="row">
                                {stories.length > 0 ? (
                                    stories.map((story) => (
                                        <div onClick={() => handleCard(story.id)} className="col-md-4 your_story_card" key={story.id}>
                                            <div className="story_card">
                                                <img src={story.image || "ImagesstaticCarouselBook1.jpg"} alt="" />
                                                <h5>{story.title}</h5>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No stories available.</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-3 item2 profile"
                        style={{
                            backgroundColor: isHovered ? "#fdf7e4" : "rgb(233, 140, 26)",
                            color: isHovered ? "rgb(233, 140, 26)" : "#fdf7e4",
                        }}
                    >
                        <div className="profile_details">
                            <div>
                                <h5>
                                    <FontAwesomeIcon icon={faUser} />
                                </h5>
                                <h3>{username}</h3>
                            </div>
                            <button
                                className="btn logout"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onClick={handleLogout}
                            >
                                LOG-OUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyAccount;
