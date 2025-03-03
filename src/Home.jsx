import { StrictMode, useState } from 'react';
import './index.css';
import App from './App.jsx';
import { Routes, Route } from 'react-router-dom';
import CountryDetail from './Components/CountryDetail.jsx';
import { DarkModeContext } from './contexts/ThemecontextdarkMode.jsx';

function Home() {
    const [isDark, setIsDark] = useState(localStorage.getItem('isDarkmode') === 'true');

    return (
        <DarkModeContext.Provider value={[isDark, setIsDark]}>
            <StrictMode>
                <Routes>
                    <Route path="/*" element={<App />} >
                        <Route path=":Country" element={<CountryDetail />} />
                    </Route>
                </Routes>
            </StrictMode >
        </DarkModeContext.Provider >
    );
}

export default Home;
