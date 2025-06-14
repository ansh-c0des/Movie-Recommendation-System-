import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import React from "react";

function App() {
  return (
    <>
      {/* <Header />
       */}

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    
    </>
  );
}

export default App;
