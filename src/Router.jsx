import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App';
import MyResume from './Legos/MyResume';
import P1 from './Legos/P1';
import P2 from './Legos/P2';
import Post1 from './Legos/Posts/Post1';
import Post2 from './Legos/Posts/Post2';
import Post3 from './Legos/Posts/Post3';
import BlogHome from './Legos/Blog';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<MyResume />} />
        <Route path="/project1" element={<P1 />} />
        <Route path="/project2" element={<P2 />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog/post1" element={<Post1 />} />
        <Route path="/blog/post2" element={<Post2 />} />
        <Route path="/blog/post3" element={<Post3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
