
import { createRoot } from 'react-dom/client'
import './index.css'

import { HashRouter, } from "react-router-dom";


import Home from './home.jsx';






createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Home />
  </HashRouter >
)

