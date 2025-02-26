import './App.css'
import { useState } from 'react'
import './index.css'
import Header from './Components/Header.jsx'
import Searchbar from './Components/Searchbar.jsx'
import Filtermenu from './Components/Filtermenu.jsx'
import CountriesList from './Components/CountriesList.jsx'
import { Routes, Route } from 'react-router'
import { Outlet } from "react-router-dom";

function App() {
  const [query, SetQuery] = useState('');
  return (
    <>
      <Routes>
        <Route path='/*' element={<Header />} />
      </Routes >
      <main>
        <Routes>
          <Route path='/' element={<div className="search-filter-container">
            <Searchbar setQuery={SetQuery} />
            <Filtermenu />
          </div>} />
        </Routes>
        <Routes>
          <Route path="/" element={<CountriesList Query={query} />} />
        </Routes>


      </main>
      <Outlet />
    </>
  )
}

export default App
