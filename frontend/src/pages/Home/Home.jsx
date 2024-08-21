import axios from 'axios';
import { useState } from 'react';

const Home = () => {
    const [title, setTitle] = useState('');
    const [firstLine, setFirstLine] = useState('');
    const [error, setError] = useState('');

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

            // Optionally, clear the form fields or give a success message
            setTitle('');
            setFirstLine('');
        } catch (error) {
            console.error(error);
            setError('Failed to create story or contribute the first line.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Story Title"
                    required
                />
                <input
                    type="text"
                    value={firstLine}
                    onChange={(e) => setFirstLine(e.target.value)}
                    placeholder="First Line"
                    required
                />
                <button type="submit">Create Story</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Home;
