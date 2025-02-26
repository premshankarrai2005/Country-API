import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className="error-container">
            <img
                src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg"
                alt="Error"
                className="error-image"
            />
            <h1 className="error-title">Oops! Page Not Found</h1>
            <p className="error-message">The page you are looking for does not exist.</p>
            <Link to="/" className="error-button">Go Back Home</Link>
        </div >
    );
}

export default ErrorPage;
