import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LinkList from "./components/homepag/LinkList";
import LinkPage from "./components/homepag/LinkPage";
import Navbar from "./components/navbar/navbar";
import Contact from "./components/navbar/Contact";
import About from "./components/navbar/About";
import Why from "./components/navbar/Why";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LinkList />} />
        <Route path="/link/:linkName" element={<LinkPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/why" element={<Why />} />
      </Routes>
    </Router>
  );
};

export default App;
