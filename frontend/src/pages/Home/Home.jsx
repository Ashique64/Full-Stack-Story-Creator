import axios from 'axios';
import { useState } from 'react';
import './Home.scss';

const Home = () => {
    const [title, setTitle] = useState('');
    const [firstLine, setFirstLine] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            // Create the story and capture the response
            const storyResponse = await axios.post(
                'http://localhost:8000/api/stories/',
                { title },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const story = storyResponse.data; // Extract the story data from the response

            // Add the first contribution using the story ID
            await axios.post(
                `http://localhost:8000/api/stories/${story.id}/contribute/`,
                { content: firstLine },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // Success message
            setSuccess('Story created and first line contributed successfully!');
            setTitle('');
            setFirstLine('');
            setError('');
        } catch (error) {
            console.error(error);
            setError('Failed to create story or contribute the first line.');
            setSuccess('');
        }
    };

    return (
        <div className="home-container">
            <h1>Collaborative Story Creator</h1>
            <p>Start a new story and contribute your part to make it a masterpiece!</p>
            <form onSubmit={handleSubmit} className="story-form">
                <div className="form-group">
                    <label htmlFor="title">Story Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter story title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="firstLine">First Line:</label>
                    <input
                        type="text"
                        id="firstLine"
                        value={firstLine}
                        onChange={(e) => setFirstLine(e.target.value)}
                        placeholder="Enter the first line of the story"
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Create Story</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
        </div>
    );
};

export default Home;
