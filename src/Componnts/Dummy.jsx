import { Button, Card, TextField, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Dummy = () => {
    const [inputText, setInputText] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imagePath, setImagePath] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setImagePath(''); // Clear previous image

        // Construct the path to the image inside the 'public/Images' folder
        const imagePath = `/Images/${inputText}`;

        // Create a new Image element
        const img = new Image();

        // Promise-based approach to check if the image exists
        img.onload = () => {
            setLoading(false);
            setImagePath(imagePath); // Set the path to show the image if it loads successfully
            setInputText('')
        };

        img.onerror = () => {
            setLoading(false);
            setError(true); // Show error message if the image fails to load
        };

        img.src = imagePath; // Attempt to load the image
    };



    return (
        <div>
            <div className="app-container">
                <Card
                    sx={{
                        maxWidth: '450px',
                        padding: '10px',
                        margin: '10px',
                        marginTop: '50px',
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgb(225, 234, 205)',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                    fullWidth
                >
                    {
                        !imagePath && (
                            <>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-container">
                                        <label htmlFor="image-input">Enter The Image File Name</label>

                                        <input
                                            id="image-input"
                                            type="text"
                                            value={inputText}
                                            onChange={(e) => setInputText(e.target.value)}
                                            fullWidth
                                            variant="outlined"
                                            required
                                        />

                                        <div className="submit-container">
                                            <button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                disabled={loading}
                                                sx={{ marginTop: '10px' }}
                                            >
                                                {loading ? 'Checking...' : 'Submit'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </>
                        )
                    }
                    {error && (
                        <div className="error-container" style={{ color: 'red', marginTop: '10px' }}>
                            <Alert severity="warning" onClose={() => {setError(false) }}>
                                Error! This image File does not Exist
                            </Alert>
                        </div>
                    )}
                    {imagePath && !error && (
                        <div className="image-container" style={{ marginTop: '20px' }}>
                            <img
                                src={imagePath}
                                alt="Found Image"
                                style={{ maxWidth: '100%' }}
                            />
                            <div className="submit-container">
                                <div className="download-container" style={{ marginTop: '20px' }}>
                                    <a href={imagePath} download>
                                        <button color="secondary">
                                            Download Image
                                        </button>
                                    </a>
                                </div>

                            </div>
                        </div>
                    )}
                    {loading &&  (
                        <div className="loading-container" style={{ marginTop: '10px', textAlign:'center' }}>
                            <CircularProgress />
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default Dummy;
