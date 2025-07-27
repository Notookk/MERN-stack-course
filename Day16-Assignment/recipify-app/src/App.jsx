import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Search from './components/Search'
import Trending from './components/Trending'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/details' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


