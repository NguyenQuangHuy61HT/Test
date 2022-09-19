import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import './styles.scss'
import Services from './pages/Services';
import News from './pages/News';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NoPage from './pages/Nopage';
function Page() {
    return (
      <div className="grid-container">
        <div className="grid-item">
          <Navbar />
        </div>
        <div className="grid-item">

          <Routes>
              <Route path="home" element={<Home />} />
              <Route path="sevices" element={<Services />} />
              <Route path="/" element={<News />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    );
}

export default Page;