import './App.css'
import { useContext, useState } from 'react'
import './index.css'
import Header from './Components/Header.jsx'
import Searchbar from './Components/Searchbar.jsx'
import Filtermenu from './Components/Filtermenu.jsx'
import CountriesList from './Components/CountriesList.jsx'
import { Routes, Route } from 'react-router'
import { Outlet } from "react-router-dom";
import { DarkModeContext } from './contexts/ThemecontextdarkMode.jsx'

function App() {
  const [query, SetQuery] = useState('');
  const [isDark] = useContext(DarkModeContext)


  return (
    <>
      <Routes>
        <Route path='/*' element={<Header />} />
      </Routes >
      <main className={`${isDark ? 'dark' : ''}`}>
        <Routes>
          <Route path='/' element={<div className="search-filter-container">
            <Searchbar setQuery={SetQuery} />
            <Filtermenu setQuery={SetQuery} />
          </div>} />
        </Routes >
        <Routes>
          <Route path="/" element={<CountriesList Query={query} />} />
        </Routes>


      </main >
      <Outlet />
    </>
  )
}

export default App
