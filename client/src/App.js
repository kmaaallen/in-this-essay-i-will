import React from "react";
import Homepage from './components/homepage';
// Routes
import { Route, Routes } from "react-router-dom";
// Styles
import './styles/style.css';
// Components
import Header from './components/header';
import Post from "./components/post";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
