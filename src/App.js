import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./BrowserRouter/Pages/Layout";
import Home from "./BrowserRouter/Pages/Home";
import Blogs from "./BrowserRouter/Pages/Blogs";
import Contact from "./BrowserRouter/Pages/Contact";
import PostList from "./Components/Axios/PostList";
import A from "./contextAPI/A";
import Navbar from './ReduxAPP/Navbar';
import Shop from './ReduxAPP/Shop';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        <PostList />
        <A/>
      </BrowserRouter>
      <Navbar />
      <Shop />
    </div>
  )
}

export default App

