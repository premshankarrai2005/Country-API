import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../contexts/ThemecontextdarkMode';
import './style.css'
import errorimg from '../assets/404-error-with-landscape-concept-illustration_114360-7898-removebg-preview.png'
function ErrorPage() {
    const [isDark] = useContext(DarkModeContext)
    return (
        <main className={`error-container ${isDark ? 'dark' : ''}`}>
            < img
                src={errorimg}
                alt="Error"
                className="error-image"
            />
            <h1 className="error-title">Oops! Page Not Found</h1>
            <p className="error-message">The page you are looking for does not exist.</p>
            <Link to="/" className="error-button">Go Back Home</Link>
        </main >
    );
}

export default ErrorPage;
