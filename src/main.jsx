import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter, Routes, Route } from "react-router-dom";

import CountryDetail from './Components/CountryDetail.jsx';






createRoot(document.getElementById('root')).render(
  <HashRouter>
    <StrictMode>
      <Routes>
        <Route path="/*" element={<App />} >
          <Route path=":Country" element={<CountryDetail />} />
        </Route>
      </Routes>

    </StrictMode >
  </HashRouter >
)

