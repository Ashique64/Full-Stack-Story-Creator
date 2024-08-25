import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./StoryDetails.scss";

const StoryDetails = () => {
    const { id } = useParams();
    const [story, setStory] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const fetchStoryDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/stories/${id}/`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                console.log(response.data)
                setStory(response.data);
            } catch (err) {
                setError("Failed to fetch details");
            }
        };

        fetchStoryDetails();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/stories/${id}/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            navigate('/myaccount')
        } catch (err) {
            setError("Failed to delete story")
        }
    }
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
                                <h6>{story.contribution ? 10 - story.contribution.length : 10} Contribution left</h6>
                                <h3>{story.title}</h3>
                                <p>{story.first_line}</p>

                                <button className="btn">CONTRIBUTE</button>
                                <span className="ms-4"><button onClick={handleDelete} className="btn">DELETE</button></span>
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
