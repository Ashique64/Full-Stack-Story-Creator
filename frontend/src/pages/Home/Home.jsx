import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import CustomeCarousel from "../../components/CustomeCarousel/CustomeCarousel";
import axios from "axios";
import CompletedList from "../../components/CompletedList/CompletedList";
import OnGoingList from "../../components/OnGoingList/OnGoingList";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";

const StoryList = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            const response = await axios.get("http://localhost:8000/api/stories/", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setStories(response.data);
        };

        fetchStories();
    }, []);

    return (
        <>
            <div className="home">
                <NavBar />
                <CustomeCarousel />
                <CompletedList />
                <OnGoingList />
                <Footer />
                {/* <h2>Stories</h2>
            <ul>
                {stories.map((story) => (
                    <li key={story.id}>
                        <h3>{story.title}</h3>
                        {story.image && <img src={story.image} alt={story.title} style={{ width: '100px', height: '100px' }} />}
                        <p>Contributions: {story.contributions.length}/10</p>
                    </li>
                ))}
            </ul> */}
            </div>
        </>
    );
};

export default StoryList;
