import React from "react";
import Homepage from './components/homepage';
// Routes
import { Route, Routes } from "react-router-dom";
// Styles
import './styles/style.css';
// Components
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
